import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
	return (
		<div className="mb-10">
			<NavLink to={`/blog/${post.id}`}>
				<h2 className="hover:underline text-lg font-bold">{post.title}</h2>
			</NavLink>
			<p className="text-sm mt-1">
				By <span className="italic">{post.author}</span> on{" "}
				<NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
					<span className="underline decoration-1 font-semibold">
						{post.category}
					</span>
				</NavLink>
			</p>
			<p className="text-sm mt-1">
				Posted on <span>{post.date}</span>
			</p>
			<p className="mt-4">{post.content}</p>
			<p className="mt-4 text-blue-600 text-xs font-semibold">
				{post.tags.map((tag, index) => (
					<NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
						<span className="underline mr-2" >
							{`#${tag}`}
						</span>
					</NavLink>
				))}
			</p>
		</div>
	);
};

export default Card;
