const Card = ({ post }) => {
	return (
		<div className="mb-10">
			<h2 className="text-lg font-bold">{post.title}</h2>
			<p className="text-sm mt-1">
				By <span className="italic">{post.author}</span> on <span className="underline decoration-1 font-semibold">{post.category}</span>
			</p>
			<p className="text-sm mt-1">
				Posted on <span>{post.date}</span>
			</p>
			<p className="mt-4">{post.content}</p>
			<p className="mt-2 text-blue-600 text-xs font-semibold">
				{post.tags.map((tag, index) => (
					<span  className="underline mr-2" key={index}>
						{`#${tag}`}
					</span>
				))}
			</p>
		</div>
	);
};

export default Card;
