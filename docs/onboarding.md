# Member-lab onboarding

## Before a repository exists

Agree on the proposed name, subdomain, research scope, lead, and operating status. A member lab must have a distinct research question and an accountable lead; a broad interest page isn’t enough.

## Repository and first preview

Create the lab from the REQS template under the agreed GitHub owner. Keep all identity fields, theme choice, and research-trace framing in `src/data/lab.ts`, then add reviewed research themes, consenting people, and public output records. The homepage trace uses the first three research themes, so their order should reflect the programme rather than visual preference. Work on a feature branch and open a pull request so Vercel can produce a preview.

## Review gate

The preview must pass these checks before a subdomain is assigned:

- `pnpm build` succeeds.
- The canonical URL matches the approved subdomain.
- No private source material appears in the repository or rendered pages.
- Roles, affiliations, outputs, funding, and partner claims have public evidence.
- The site identifies itself as a virtual member lab of REQS Labs.
- Keyboard navigation, focus styles, headings, and mobile layouts work.
- `/reqs-lab.json`, `robots.txt`, and the sitemap contain the intended public values.

## Domain and central listing

Connect the repository to its own Vercel project. Add the exact subdomain to that project and copy the project-specific DNS value shown by Vercel. After the public domain works, open a separate pull request to add the lab to the curated registry at `reqs.org`.

## Later template changes

Template repositories don’t update generated repositories. Record the template version in every lab and apply later template releases through reviewed pull requests. Don’t overwrite a member lab’s data or research copy during an upgrade.
