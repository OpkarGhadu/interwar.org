import type { Record } from '../../types/Record';
import { env } from 'cloudflare:workers';

/*
DISTINCT prevents duplicate records.
Sort by publication date, then creation date, then date added.
*/
export async function getRecordsForPerson(personId: number): Promise<Record[]> {
  const result = await env.interwarDB
    .prepare(`
      SELECT DISTINCT r.*
      FROM Records r
      INNER JOIN Relationships rel
        ON r.RecordId = rel.SubjectId
      WHERE rel.SubjectType = 'Record'
        AND rel.ObjectType = 'Person'
        AND rel.ObjectId = ?
        AND rel.RelationshipType IN ('features', 'created_by')
        AND r.PublicationStatus = 1
      ORDER BY
        COALESCE(r.Date, r.DateAdded) DESC
    `)
    .bind(String(personId))
    .all<Record>();

  return result.results;
}