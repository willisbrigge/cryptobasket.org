import matter from 'gray-matter';

import fs from 'fs';
import { join } from 'path';
import { AppConfig } from './AppConfig';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
	[key: string]: string;
};

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath.replaceAll('-', ' '), 'utf8');
	const { data, content } = matter(fileContents);
	const items: PostItems = {};

	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug.replaceAll(' ', '-');
		}

		if (field === 'image') {
			items[field] = data[field].replace('cdn://', AppConfig.cdn);
		}

		if (field === 'content') {
			items[field] = content;
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllPosts(fields: string[] = []) {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}
