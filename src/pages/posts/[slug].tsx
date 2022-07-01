import React from 'react';

import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getAllPosts, getPostBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';
import Script from 'next/script';

type IPostUrl = {
	slug: string;
};

type IPostProps = {
	title: string;
	description: string;
	date: string;
	image: string;
	content: string;
	network: string;
	category: string;
	slug: string;
};

const DisplayPost = (props: IPostProps) => (
	<Main
		meta={
			<Meta
				title={props.title}
				description={props.description}
				post={{
					image: props.image,
					date: props.date,
				}}
			/>
		}
	>
		<aside className="p-12 bg-gray-100 sm:p-16 lg:p-24">
			<div className="max-w-xl mx-auto text-center">
				<p className="text-sm font-medium text-gray-500 uppercase">
					#{props.network} | #{props.category}
				</p>
				<p className="mt-2 text-3xl font-bold sm:text-5xl">{props.title}</p>
				<p className="mt-2 text-sm text-gray-500">{format(new Date(props.date), 'LLLL d, yyyy')}</p>
			</div>
		</aside>

		<Content>
			<div
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: props.content }}
			/>
		</Content>

		<div className="py-5">
			<a href={'https://github.com/moneymafia/cryptobasket.org/edit/main/_posts/' + props.slug + '.md'} className="relative inline-block text-sm font-medium text-indigo-600 group active:text-indigo-500 focus:outline-none focus:ring">
				<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-600 group-hover:translate-y-0 group-hover:translate-x-0" />
				<span className="relative block px-8 py-3 bg-white border border-current">EDIT POST ON GITHUB</span>
			</a>
		</div>

		<div id="disqus_thread"></div>

		<Script src="https://cryptobasket.disqus.com/embed.js" strategy="afterInteractive" onLoad={() => console.log(`disqus loaded correctly`)} />
	</Main>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.slug,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({ params }) => {
	const post = getPostBySlug(params!.slug, ['title', 'description', 'date', 'image', 'content', 'slug', 'category', 'network']);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			title: post.title,
			description: post.description,
			date: post.date,
			image: post.image,
			content,
			network: post.network,
			category: post.category,
			slug: post.slug,
		},
	};
};

export default DisplayPost;
