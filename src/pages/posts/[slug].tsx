import React from 'react';

import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getAllPosts, getPostBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';

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
		<div className="px-6 py-10 mx-auto text-center">
			<div className="p-1 shadow-xl rounded-2xl bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800">
				<div className="block p-6 bg-white sm:p-8 rounded-xl">
					<h2 className="mt-3 text-blue-400 dark:text-gray-300 uppercase text-xl">
						#{props.network} | #{props.category}
					</h2>

					<h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">{props.title}</h1>

					<p className="mt-3 text-gray-500 dark:text-gray-300">{format(new Date(props.date), 'LLLL d, yyyy')}</p>
				</div>
			</div>
		</div>

		<Content>
			<div
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: props.content }}
			/>
		</Content>

		<div className="border border-gray-300 text-center py-3">
			<a href={'https://github.com/moneymafia/cryptobasket.org/edit/main/_posts/' + props.slug + '.md'}>EDIT POST ON GITHUB</a>
		</div>
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
