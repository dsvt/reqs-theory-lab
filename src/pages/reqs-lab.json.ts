import type { APIRoute } from 'astro';
import { lab, templateVersion } from '@data/lab';
import { people } from '@data/people';
import { researchThemes } from '@data/research';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = {
    schemaVersion: '1.0',
    templateVersion,
    slug: lab.slug,
    name: lab.name,
    shortName: lab.shortName,
    url: lab.canonicalUrl,
    repository: lab.repositoryUrl || null,
    status: lab.status,
    lead: lab.lead.name,
    themes: researchThemes.map((theme) => theme.title),
    people: people.map((person) => person.name)
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
};
