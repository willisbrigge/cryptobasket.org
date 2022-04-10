import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
	<Main meta={<Meta title="About Us" description="Crypto Basket is a auto built crypto/blockchain projects directory powered by users and developers from all around the world. Crypto Basket is completely open source & all the pages are built from Github to eliminate any manipulation to content by team or by anyone else. We provide no discrimination on listing projects, we don't care if a VC support you or not. if your project is good and solves a issue it will be listed on Crypto Basket." />}>
		<Content>
			<p>Crypto Basket is a auto built crypto/blockchain projects directory powered by users and developers from all around the world. Crypto Basket is completely open source & all the pages are built from Github to eliminate any manipulation to content by team or by anyone else.  
<br />
<br />
We provide no discrimination on listing projects, we don't care if a VC support you or not. if your project is good and solves a issue it will be listed on Crypto Basket. </p>
		</Content>
	</Main>
);

export default About;
