import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
import Card from "./Card";

const Blogs = () => {
	// step3: consume
	const { posts, loading } = useContext(AppContext);

	return (
		<main className="w-[670px] mx-auto mt-6 pb-14">
			{loading ? (
				<Loader />
			) : posts.length === 0 ? (
				<div className="h-[70vh] flex justify-center items-center">
					<p className="mt-4 text-3xl font-bold">No Post Found</p>
				</div>
			) : (
				<div className="mt-4">
					{posts.map((post) => (
						<Card post={post} key={post.id} />
					))}
				</div>
			)}
		</main>
	);
};

export default Blogs;
