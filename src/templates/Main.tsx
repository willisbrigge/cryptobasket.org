import React, { ReactNode } from 'react';

import Link from 'next/link';

type IMainProps = {
	meta: ReactNode;
	children: ReactNode;
};

const Main = (props: IMainProps) => (
	<div className="px-5 py-5 mx-auto container">
		{props.meta}

		<div className="flex flex-col flex-wrap md:flex-row items-center justify-between py-6 ">
			<div className="relative flex flex-col md:flex-row">
				<Link href="/">
					<div className="flex items-center mb-5 font-bold text-gray-900 lg:w-auto text-sm md:text-2xl cursor-pointer">CRYPTOBASKET</div>
				</Link>
			</div>
			<div className="inline-flex flex-col items-center sm:flex-row sm:ml-5 lg:justify-end">
				<nav className="flex flex-wrap items-center space-x-4 text-sm md:text-lg font-semibold  sm:space-x-6  cursor-pointer">
					<Link href="/about/">ABOUT</Link>
				</nav>
			</div>
		</div>

		<div className="py-5 lg:py-20">{props.children}</div>
	</div>
);

export { Main };
