import type { Record } from '../../types/Record';
import { env } from 'cloudflare:workers';


/* 
DISTINCT prevents duplicate records
First sort by date published, then date created, then date added
*/
export async function getRecordsForPerson(personId: string): Promise<Record[]> {
  const result = await env.interwarDB
    .prepare(`
      SELECT DISTINCT r.*
      FROM Records r
      INNER JOIN Relationships rel
        ON r.RecordId = rel.SubjectId
      WHERE rel.ObjectId = ?
        AND rel.RelationshipType IN ('features', 'created_by')
        AND r.PublicationStatus = 'published'
      ORDER BY
        COALESCE(r.DatePublished, r.DateCreated, r.DateAdded) DESC
    `)
    .bind(personId)
    .all<Record>();

  return result.results;
}