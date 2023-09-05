import React from "react";
import { HiSearch } from "react-icons/hi";
import adminProfile from "../../../assets/member.png";

export default function Header() {
	return (
		<header className="flex justify-between items-center w-full">
			<div className="flex space-x-2 items-center border p-2 w-96 rounded">
				<span>
					<HiSearch className="text-gray-400" />
				</span>
				<input
					type="search"
					placeholder="Search"
					className="w-full text-black focus:outline-none"
				/>
			</div>

			<div className="flex space-x-2 items-center">
				<small className="text-gray-500">Logged in as:</small>
				<img
					src={adminProfile}
					alt="profile"
				/>
				<div className="flex flex-col space-y-1">
					<h3 className="font-semibold">Dr. Maduka Janet</h3>
					<div className="flex space-x-1 items-center">
						<button className="text-1xl py-1 px-3 rounded text-white border bg-blue-500">
							Admin
						</button>
						<button className="border rounded py-1 px-3">View Profile</button>
					</div>
				</div>
			</div>
		</header>
	);
}
