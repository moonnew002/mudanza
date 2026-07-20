import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// z = zood
const servicios = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,json}', base: "./src/content/servicios" }),
    schema: z.object({
        name: z.string(),
        img:z.string(),
        description:z.string()
    })
});

export const collections = { servicios };