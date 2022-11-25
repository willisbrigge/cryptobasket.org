import React, { ReactNode } from 'react';

import Link from 'next/link';

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
};

const Main = (props: IMainProps) => (
	<div className="antialiased w-full text-gray-700 px-3 md:px-0">
		{props.meta}

		<section className="w-full px-8 text-gray-700 bg-gradient-to-r from-teal-100 to-yellow-100">
			<div className="flex flex-col flex-wrap items-center justify-between py-6 mx-auto md:flex-row container">
				<div className="relative flex flex-col md:flex-row">
					<Link href="/">
						<div className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
							<svg className="w-auto h-10 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
							</svg>
						</div>
					</Link>
				</div>
				<div className="inline-flex flex-col items-center sm:flex-row sm:ml-5 lg:justify-end">
					<nav className="flex flex-wrap items-center space-x-4 text-sm md:text-lg font-semibold tracking-wide sm:space-x-6 uppercase">
						<Link href="/about/">ABOUT</Link>
					</nav>
				</div>
			</div>
		</section>

		<div className="px-5 py-5 mx-auto  container">
			<div>{props.children}</div>
		</div>
	</div>
);

export { Main };
