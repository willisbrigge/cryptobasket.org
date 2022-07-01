import React, { ReactNode } from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
};

const Main = (props: IMainProps) => (
	<div className="antialiased w-full text-gray-700 px-3 md:px-0">
		{props.meta}

		<div className="max-w-7xl mx-auto px-5">
			<div className="border-b border-gray-300">
				<div className="pt-16 pb-8">
					<div className="font-semibold text-2xl text-gray-900 uppercase">{AppConfig.title}</div>
					<div className="text-xl">{AppConfig.description}</div>
				</div>
				<div className="uppercase">
					<nav className="bg-white shadow dark:bg-gray-800">
						<div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
							<Link href="/">
								<div className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">HOME</div>
							</Link>
							<Link href="/about/">
								<div className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">ABOUT</div>
							</Link>
							<Link href="/add/">
								<div className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">ADD PROJECT</div>
							</Link>
							<a href="https://t.me/cryptobasketorg">
								<div className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">TELEGRAM</div>
							</a>
						</div>
					</nav>
				</div>
			</div>

			<div className="py-10 pb-20">{props.children}</div>
		</div>
	</div>
);

export { Main };
