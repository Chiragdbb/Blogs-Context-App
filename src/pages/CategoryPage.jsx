import React from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const CategoryPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const category = location.pathname.split("/").at(-1);

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
					Blogs On <span className="underline">{category}</span>
				</h2>
			</div>
			<Blogs />
			<Pagination />
		</div>
	);
};

export default CategoryPage;
