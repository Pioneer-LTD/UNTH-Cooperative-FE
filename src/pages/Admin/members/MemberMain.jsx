import React, { useState } from "react";
import Member from "./Member";
import data from "../../../data.json";
import "../members/Members.css";

export default function MemberMain({}) {
	const itemsPerPage = 4; // Number of items to display per page
	const [currentPage, setCurrentPage] = useState(1);

	// Calculate the index range for the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	return (
		<div className="mt-2 overflow-scroll member-main">
			<h1 className="text-3xl font-bold">Members</h1>
			<div className="overflow-scroll mt-2 border member-container">
				<Member
					startIndex={startIndex}
					endIndex={endIndex}
				/>
			</div>
			<div className="flex justify-center mt-4">
				{[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(
					(pageNumber) => (
						<button
							key={pageNumber}
							className={`mx-2 p-2 ${
								currentPage === pageNumber + 1
									? "bg-blue-500 text-white"
									: "bg-gray-200"
							}`}
							onClick={() => handlePageChange(pageNumber + 1)}>
							{pageNumber + 1}
						</button>
					)
				)}
			</div>
		</div>
	);
}
