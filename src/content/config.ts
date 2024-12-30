import { defineCollection, z } from "astro:content";
import { counselors as getCounselors } from "../data/counselors";
import { blogPosts as getBlogs } from "../data/blogs";

const counselors = defineCollection({
	loader: async () => {
		return getCounselors;
	},
	schema: z.object({
		id: z.string(),
		name: z.string(),
		description: z.string(),
		imageUrl: z.string(),
		prefecture: z.string(),
		region: z.string(),
	}),
});

const blogs = defineCollection({
	loader: async () => {
		return getBlogs;
	},
	schema: z.object({
		id: z.string(),
		counselorId: z.string(),
		title: z.string(),
		content: z.string(),
		excerpt: z.string(),
		publishedAt: z.string().datetime(),
		imageUrl: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	counselors,
	blogs,
};
