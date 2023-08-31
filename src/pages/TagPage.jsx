import React from "react";
import { useLocation, useNavigate } from "react-router";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const TagPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const tag = location.pathname.split("/").at(-1);
	console.log(tag);

	return (
		<div>
			<Header />
			<div className="w-[670px] mx-auto pt-24 flex items-center">
				<button
					onClick={() => navigate(-1)}
					className="border-2 border-gray-300 px-4 py-1 rounded-md"
				>
					Back
				</button>
				<h2 className="ml-2 text-xl font-bold">
					{`Blogs Tagged `}
					<span className="text-blue-600 underline">#{tag}</span>
				</h2>
			</div>
			<Blogs />
			<Pagination />
		</div>
	);
};

export default TagPage;
