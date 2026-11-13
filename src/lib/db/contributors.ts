import type { Contributor, ContributorIndex } from '../../types/Contributor';
import { env } from 'cloudflare:workers';

export async function getContributorIndex(){

  const { results } = await env.interwarDB
  .prepare(`
    SELECT ContributorId, Name, Slug 
    FROM Contributors 
    ORDER BY Id
    `)
    .all<ContributorIndex>();
    
    return results;
}

export async function getAllContributors(): Promise<Contributor[]> {
    const { results } = await env.interwarDB
        .prepare('SELECT * FROM Contributors ORDER BY ContributorId')
        .all<Contributor>();

    return results;
}

