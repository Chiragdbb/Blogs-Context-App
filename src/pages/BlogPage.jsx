import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { baseUrl } from "../baseUrl";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";

const BlogPage = () => {
	const [blog, setBlog] = useState(null);
	const [relatedBlogs, setRelatedBlogs] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const { loading, setLoading } = useContext(AppContext);
	const blogId = location.pathname.split("/").at(-1);

	async function fetchRelatedBlogs() {
		setLoading(true);
		let url = `${baseUrl.slice(0,baseUrl.length-1)}?blogId=${blogId}`;
		try {
			const res = await fetch(url);
			const data = await res.json();
			setBlog(data.blog);
			setRelatedBlogs(data.relatedBlogs);
		} catch (error) {
			console.log(error);
			setBlog(null);
			setRelatedBlogs([]);
		}
		setLoading(false);
	}

	useEffect(() => {
		if (blogId) {
			fetchRelatedBlogs();
		}
	}, [location.pathname]);

	return (
		<div>
			<Header />
			<div className="w-[670px] mx-auto pt-24">
				<button
					onClick={() => navigate(-1)}
					className="border-2 border-gray-300 px-4 py-1 rounded-md"
				>
					Back
				</button>

				<div className="mt-6">
					{loading ? (
						<Loader />
					) : blog ? (
						<div>
							<Card post={blog} />
							<h2 className="text-3xl font-bold">
								Related Blogs
							</h2>
							<div className="mt-8">
								{relatedBlogs.map((relatedBlog, index) => (
									<Card key={index} post={relatedBlog} />
								))}
							</div>
						</div>
					) : (
						<div>
							<p>No Blog Found</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
