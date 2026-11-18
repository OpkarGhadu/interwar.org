import type { Person, PersonIndex, PersonPath } from '../../types/Person';
import { env } from 'cloudflare:workers';

export async function getPeopleIndex(): Promise<PersonIndex[]> {
    const { results } = await env.interwarDB
        .prepare(`
          SELECT PersonId, Slug, Name, SortName 
          FROM People
          WHERE PublicationStatus = 1 
          ORDER BY SortName
          `)
        .all<PersonIndex>();

    return results;
}

export async function getPersonById(personId: number): Promise<Person> {
    const { results } = await env.interwarDB
        .prepare(`
            SELECT * FROM People 
            WHERE PersonId = ? AND PublicationStatus = 1`)
        .bind(personId)
        .all<Person>();

    const person = results[0];
    if (!person) {
        throw new Error(`Person not found: ${personId}`);
    }

    return person;
}

export async function getPeoplePaths(): Promise<PersonPath[]> {
    const { results } = await env.interwarDB
        .prepare(`
            SELECT PersonId, Slug
            FROM People
            WHERE PublicationStatus = 1
        `)
        .all<PersonPath>();

    return results;
}