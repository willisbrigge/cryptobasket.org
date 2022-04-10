import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Add = () => (
	<Main meta={<Meta title="Add" description="Add" />}>
		<Content>
			<h2 id="Rules">Important Rules</h2>
			<p>All content (images, videos, pdf) should be uploaded to IPFS</p>

			<h3 id="how-to-add-content-to-cryptobasket-">How to add content to CryptoBasket ?</h3>
			<p>You can add your posts in _posts folder and create a PR to add your project.</p>
			<p>
				<a href="https://github.com/moneymafia/cryptobasket.org/tree/main/_posts">_posts</a>
			</p>
			<p>
				Here is the example <a href="https://github.com/moneymafia/cryptobasket.org/blob/main/_posts/example.md">Content File</a>
			</p>

			<h3 id="how-to-upload-files-to-ipfs-">How to upload files to IPFS ?</h3>
			<p>
				<a href="https://anarkrypto.github.io/upload-files-to-ipfs-from-browser-panel/public/">Use This Website</a>
			</p>
			<p>&amp; you will get file hash, which you can use in the markdown </p>
			<p>
				<a href="https://gateway.ipfs.io/ipfs/">https://gateway.ipfs.io/ipfs/</a>
				&lt; IPFS HASH HERE&gt;
			</p>
		</Content>
	</Main>
);

export default Add;
