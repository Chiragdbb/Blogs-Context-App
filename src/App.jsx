import "./index.css";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
	const { fetchBlogPosts } = useContext(AppContext);

	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	useEffect(() => {
		// set 1 as default, if found nothing
		const page = searchParams.get("page") ?? 1;

		if (location.pathname.includes("tags")) {
			// show tags page
			const tag = location.pathname
				.split("/")
				.at(-1)
				.replaceAll("-", " ");
			fetchBlogPosts(Number(page), tag);
		} else if (location.pathname.includes("categories")) {
			// show category page
			const category = location.pathname
				.split("/")
				.at(-1)
				.replaceAll("-", " ");
			fetchBlogPosts(Number(page), null, category);
		} else {
			// show blog page
			fetchBlogPosts(Number(page));
		}
	}, [location.pathname, location.search]);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/blog/:blogId" element={<BlogPage />} />
			<Route path="/tags/:tag" element={<TagPage />} />
			<Route path="/categories/:category" element={<CategoryPage />} />
		</Routes>
	);
}

export default App;
