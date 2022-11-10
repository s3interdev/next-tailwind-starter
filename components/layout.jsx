import Head from 'next/head';

import { Footer, Header } from './index';

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Automate building of websites and web application projects using Next.JS and Tailwind CSS"
				/>
				<link rel="icon" type="image/png" href="/favicon.png" />
				<title>{title ? title + ' | S3' : 'S3'}</title>
			</Head>

			{/** body section start */}
			<div className="flex min-h-screen flex-col justify-between">
				{/** header section start start */}
				<header>
					<Header />
				</header>
				{/** header section start end */}

				{/** main content section start */}
				<main className="container m-auto mt-5 px-5">{children}</main>
				{/** main content section end */}

				{/** footer section start start */}
				<footer>
					<Footer />
				</footer>
				{/** footer section start start */}
			</div>
			{/** body section end */}
		</>
	);
};

export default Layout;
