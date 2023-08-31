import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<NavLink to={`/`}>
				<h1 className="fixed top-0 w-full uppercase text-center font-bold text-[30px] py-3 shadow-md bg-white">
					Codehelp blogs
				</h1>
			</NavLink>
		</header>
	);
};

export default Header;
