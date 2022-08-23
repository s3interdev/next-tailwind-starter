import Meta from '../lib/Meta';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<main>{children}</main>
		</>
	);
};

export default Layout;
