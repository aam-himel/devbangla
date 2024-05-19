// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const posts = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: z.object({
		title: z.string()
	})
})

const tutorials = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		author: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string()
		}),
		tags: z.array(z.string()),
		category: z.enum(['HTML', 'CSS', 'JavaScript', 'Other']), // Add other categories as needed
		difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
		estimatedTime: z.string(), // e.g., '30 minutes'
		prerequisites: z.array(z.string()), // e.g., ['HTML Basics', 'CSS Basics']
		sections: z.array(
			z.object({
				title: z.string(),
				content: z.string(),
				codeSnippet: z.string().optional()
			})
		),
		resources: z.array(
			z.object({
				name: z.string(),
				url: z.string()
			})
		),
		relatedTutorials: z.array(z.string()) // References to related tutorials by ID or slug
	})
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	posts,
	tutorials
}
