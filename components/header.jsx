import Link from 'next/link';

const Header = () => {
	return (
		<nav className="flex h-12 items-center justify-between px-[25px] shadow-md">
			{/** logo section start */}
			<Link href="/" className="text-lg font-bold">
				Superior Software Solutions
			</Link>
			{/** logo section end */}

			{/** navigation links start */}
			<div>
				<Link href="#" className="p-2">
					About
				</Link>
				<Link href="#" className="p-2">
					Contact
				</Link>
			</div>
			{/** navigation links end */}
		</nav>
	);
};

export default Header;
