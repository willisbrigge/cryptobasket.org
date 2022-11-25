import React from 'react';

import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
	posts: PostItems[];
	pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
	<>
		<section className="p-5 md:p-0 grid grid-cols-1 xl:grid-cols-3 gap-5 items-start ">
			{props.posts.map((elt) => (
				<div key={elt.slug}>
					<Link href="/posts/[slug]" as={`/posts/${elt.slug}`} passHref>
						<section className="relative block group h-80 cursor-pointer">
							<span className="absolute inset-0 border-2 border-black border-dashed" />
							<div className="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
								<div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
									<h2 className="font-semibold mb-2 mt-5 text-cyan-600 uppercase">#{elt.category}</h2>
									<h2 className="mt-4 text-2xl font-medium">{elt.title}</h2>
								</div>
								<div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
									<h2 className="mt-4 text-2xl font-medium">{elt.title}</h2>
									<p className="mt-4">{elt.description.substring(0, 150)}</p>
									<p className="mt-8 font-bold">Read more</p>
								</div>
							</div>
						</section>
					</Link>

					<Link href="/posts/[slug]" as={`/posts/${elt.slug}`} passHref>
						<a className="hidden">
							<h1>{elt.title}</h1>
							<h2>{elt.description}</h2>
						</a>
					</Link>
					<Link href="/posts/[slug]" as={`/posts/${elt.slug}`} passHref>
						<a className="hidden">
							<h1>
								{elt.category} {elt.title}
							</h1>
						</a>
					</Link>
					<Link href="/posts/[slug]" as={`/posts/${elt.slug}`} passHref>
						<a className="hidden">
							<h1>{elt.title}</h1>
						</a>
					</Link>
				</div>
			))}
		</section>

		<Pagination previous={props.pagination.previous} next={props.pagination.next} />
	</>
);

export { BlogGallery };
