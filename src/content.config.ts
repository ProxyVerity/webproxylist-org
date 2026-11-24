import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Two kinds of entry, declared rather than guessed.
 *
 *  exchange — a real placement swap. The provider published an article about
 *             ProxyVerity, and `backlink` is the URL of that page. These are
 *             the only entries scripts/check-partners.mjs looks at.
 *  listing  — a catalogue entry written by us from the provider's public
 *             facts. No reciprocal link exists and none is expected, so a
 *             checker complaining about one would be noise, not signal.
 *
 * The distinction is enforced below instead of inferred, because six months
 * from now nobody will remember which pages carried an actual agreement.
 */
const providers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/providers' }),
  schema: z
    .object({
      name: z.string().min(1),
      domain: z.string().min(3),
      url: z.string().url(),
      category: z.string().min(1),
      countries: z.array(z.string().min(2)).min(1),
      // Large networks advertise a location count, not a list. Printing
      // "4 countries" from a representative sample would understate them by two
      // orders of magnitude, so the provider's own figure goes here verbatim
      // and the card prefers it.
      locations_claimed: z.string().optional(),
      protocols: z.array(z.string().min(3)).min(1),
      pricing_from: z.string().min(1),
      pricing_unit: z.string().min(1),
      rotation: z.string().min(1),
      api: z.boolean().default(false),
      logo: z.string().optional(),
      screenshot: z.string().optional(),
      summary: z.string().min(40).max(300),
      kind: z.enum(['exchange', 'listing']),
      backlink: z.string().url().optional(),
      updated: z.coerce.date(),
      order: z.number().int().default(100),
    })
    .superRefine((data, ctx) => {
      if (data.kind === 'exchange' && !data.backlink) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['backlink'],
          message:
            'kind "exchange" requires backlink: the URL of the partner page that links to proxyverity.com. ' +
            'Without it the placement is untracked and check-partners.mjs cannot see it.',
        });
      }
      if (data.kind === 'listing' && data.backlink) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['backlink'],
          message:
            'kind "listing" must not carry backlink. A listing is a catalogue entry with no reciprocal ' +
            'link; if a link does exist, this entry is an "exchange".',
        });
      }
    }),
});

export const collections = { providers };
