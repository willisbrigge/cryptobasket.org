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
		<div className="text-center py-20">
			<div className="my-10">
				<h2 className="relative inline-block px-5 py-2 mb-5 text-5xl  font-extrabold bg-white border-2 border-black">
					<div className="absolute w-full py-2 h-full inset-0 border-2 border-black bg-black ml-1.5 mt-1.5" />
					<div className="absolute inset-0 w-full h-full py-2 bg-white" />
					<span className="relative">{props.title}</span>
				</h2>
				<p className="text-xl font-medium text-gray-800 mb-7">
					#{props.category} - {format(new Date(props.date), 'LLLL d, yyyy')}
				</p>
			</div>{' '}
		</div>

		<div className="m-auto max-w-3xl">
			<Content>
				<div
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: props.content }}
				/>
			</Content>{' '}
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
	const post = getPostBySlug(params!.slug, ['title', 'description', 'date', 'image', 'content', 'slug', 'category']);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			title: post.title,
			description: post.description,
			date: post.date,
			image: post.image,
			content,
			category: post.category,
			slug: post.slug,
		},
	};
};

export default DisplayPost;
