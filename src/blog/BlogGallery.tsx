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
    <section className="p-5 md:p-0 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-5 items-start ">
      {props.posts.map((elt) => (
        <div key={elt.slug}>
          <section className="p-5 py-5 text-left transform duration-1000 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <h2 className="font-semibold mb-2 mt-5 text-cyan-600 uppercase">
              <a href={'https://www.google.com/search?q=site%3Acryptobasket.org+' + elt.network}> #{elt.network}</a> | <a href={'https://www.google.com/search?q=site%3Acryptobasket.org+' + elt.category}> #{elt.category}</a>
            </h2>
            <Link href="/posts/[slug]" as={`/posts/${elt.slug}`} passHref>
              <h1 className="text-3xl mb-2 h-16">{elt.title}</h1>
              <p className="mb-5">{elt.description.substring(0, 150)}</p>
            </Link>
          </section>

          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`} passHref>
            <a className='hidden'>
              <h1>{elt.title}</h1>
              <h2>{elt.description}</h2>
            </a>
          </Link>

          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`} passHref>
            <a className='hidden'>
              <h1>{elt.network} {elt.category} {elt.title}</h1>
            </a>
          </Link>

          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`} passHref>
            <a className='hidden'>
              <h1>{elt.title} {elt.network}</h1>
            </a>
          </Link>

        </div>
      ))}
    </section>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
