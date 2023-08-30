import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
	const { page, totalPages, handlePageChange } = useContext(AppContext);

	return (
		<footer className="fixed bottom-0 left-0 py-3 bg-white w-full border-t-2">
			<div className="w-[670px] mx-auto flex justify-between items-center">
				<div>
					{page > 1 && (
						<button
							onClick={() => handlePageChange(page - 1)}
							className="border-2 border-gray-300 rounded-md px-3 py-1 mr-2"
						>
							Previous
						</button>
					)}
					{page < totalPages && (
						<button
							onClick={() => handlePageChange(page + 1)}
							className="border-2 border-gray-300 rounded-md px-3 py-1"
						>
							Next
						</button>
					)}
				</div>
				<p className="font-semibold">
					Page {page} of {totalPages}
				</p>
			</div>
		</footer>
	);
};

export default Pagination;
