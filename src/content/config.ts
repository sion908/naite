import { defineCollection, z } from 'astro:content';

const events = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		location: z.string().optional(),
        links: z.array(
            z.object({
                text: z.string(),
                url: z.string(),
            })
        ).optional(),
	}),
});

export const collections = {
	events,
};
