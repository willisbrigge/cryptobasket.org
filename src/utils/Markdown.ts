// TODO: @mapbox/rehype-prism does not have typescript definition
// @ts-ignore

import rehypePrism from '@mapbox/rehype-prism';
import html from 'rehype-stringify';
import gfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeVideo from 'rehype-video';

import { unified } from 'unified';
import { AppConfig } from './AppConfig';


export async function markdownToHtml(markdown: string) {
	const xmarkdown = markdown.replaceAll('cdn://', AppConfig.cdn)
	const result = await unified().use(remarkParse).use(gfm).use(remarkRehype).use(rehypePrism).use(rehypeVideo).use(html).process(xmarkdown);
	return result.toString().replace(/@@baseUrl@@/g, process.env.baseUrl || '');
}
