import type { Person, PersonIndex } from '../../types/Person';
import { env } from 'cloudflare:workers';

export async function getPeopleIndex(): Promise<PersonIndex[]> {
    const { results } = await env.interwarDB
        .prepare(`
          SELECT PersonId, Name, SortName 
          FROM People 
          ORDER BY SortName
          `)
        .all<PersonIndex>();

    return results;
}

export async function getAllPeople(): Promise<Person[]> {
    const { results } = await env.interwarDB
        .prepare('SELECT * FROM People ORDER BY SortName')
        .all<Person>();

    return results;
}