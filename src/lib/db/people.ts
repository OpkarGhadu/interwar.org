/* 
import { env } from 'cloudflare:workers';

const { results } = await env.interwar
    .prepare('SELECT * FROM People ORDER BY LastName, FirstName')
    .all();

const allPeople = results;

;
*/