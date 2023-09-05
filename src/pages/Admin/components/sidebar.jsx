import React, { useState } from "react";
import {
	RiSettingsLine,
	RiTeamLine,
	RiBankCardLine,
	RiRefundLine,
	RiBookletLine,
	RiSettings3Line,
	RiFileChartLine,
	RiNotification2Line,
	RiLogoutBoxRLine,
} from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import { HiMenuAlt2, HiSearch } from "react-icons/hi";
import profile from "../../../assets/unth.png";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [activeItem, setActiveItem] = useState("");

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	const handleItemClick = (item) => {
		setActiveItem(item);
	};

	return (
		<section
			className={`relative h-screen fixed py-5 bg-light-primary-green ${
				isCollapsed ? "w-32" : "w-96"
			} h-screen transition-all`}>
			<button
				className={`p-2 absolute right-2 focus:outline-none ${
					isCollapsed ? "absolute left-2" : "ml-auto"
				}`}
				onClick={toggleSidebar}>
				<HiMenuAlt2 className="text-2xl text-white" />
			</button>

			<div className="flex flex-col space-y-7 mt-20 px-8">
				{isCollapsed && (
					<div>
						<img
							src={profile}
							alt="profile"
							width={200}
							height={200}
						/>
					</div>
				)}
				<div
					className={`flex w-full ${
						isCollapsed ? "bg-none" : "bg-white"
					} items-center justify-center space-x-4 mx-auto px-5 rounded`}>
					<span
						onClick={toggleSidebar}
						className={`${isCollapsed ? "px-0 py-2 mr-2 text-2xl" : ""}`}>
						<HiSearch
							className={` ${
								isCollapsed ? "text-2xl text-white" : "text-gray-400 text-xl"
							} `}
						/>
					</span>
					<input
						type="text"
						className={`w-full py-3 text-black bg-white border-none rounded focus:outline-none ${
							isCollapsed ? "hidden" : ""
						}`}
						placeholder="Search"
					/>
				</div>

				<ul className="text-white flex flex-col justify-center space-y-2">
					<Link
						to={"/members"}
						className={`navlink flex items-center  px-0 py-4 ${
							activeItem === "members" ? "active" : ""
						} ${isCollapsed ? "" : "px-8"}`}
						onClick={() => handleItemClick("members")}>
						<span className="mr-5">
							<RiTeamLine className="text-2xl" />
						</span>
						<span className={`${isCollapsed ? "hidden" : ""}`}>Members</span>
					</Link>
					<Link
						className={`navlink flex items-center py-4  ${
							activeItem === "dues" ? "active" : ""
						} ${isCollapsed ? "" : ""}`}
						onClick={() => handleItemClick("dues")}>
						<span className="mr-5">
							<RiBankCardLine className="text-2xl" />
						</span>
						<span className={`${isCollapsed ? "hidden" : ""}`}>
							Generate Member Dues
						</span>
					</Link>
					<Link
						className={`navlink flex items-center px-0 py-4  ${
							activeItem === "deduction" ? "active" : ""
						} ${isCollapsed ? "" : "px-8"}`}
						onClick={() => handleItemClick("deduction")}>
						<span className="mr-5">
							<RiRefundLine className="text-2xl" />
						</span>
						<span className={`${isCollapsed ? "hidden" : ""}`}>
							Generate Deduction
						</span>
					</Link>
					<Link
						className={`navlink flex items-center px-0 py-4  ${
							activeItem === "ledger" ? "active" : ""
						} ${isCollapsed ? "" : "px-8"}`}
						onClick={() => handleItemClick("ledger")}>
						<span className="mr-5">
							<RiBookletLine className="text-2xl" />
						</span>
						<span className={`${isCollapsed ? "hidden" : ""}`}>
							General Ledger
						</span>
					</Link>
					<Link
						className={`navlink flex items-center px-0 py-4  ${
							activeItem === "setup" ? "active" : ""
						} ${isCollapsed ? "" : "px-8"}`}
						onClick={() => handleItemClick("setup")}>
						<span className="mr-5">
							<RiSettings3Line className="text-2xl" />
						</span>
						<span className={`${isCollapsed ? "hidden" : ""}`}>Setup</span>
					</Link>
					<Link
						className={`navlink flex items-center px-0 py-4  ${
							activeItem === "reports" ? "active" : ""
						} ${isCollapsed ? "" : "px-8"}`}
						onClick={() => handleItemClick("reports")}>
						<span className="mr-5">
							<RiFileChartLine className="text-2xl" />
						</span>
						<span className={`${isCollapsed ? "hidden" : ""}`}>Reports</span>
					</Link>
					<Link
						className={`navlink flex items-center px-0 py-4  ${
							activeItem === "notification" ? "active" : ""
						} ${isCollapsed ? "" : "px-8"}`}
						onClick={() => handleItemClick("notification")}>
						<span className="mr-5">
							<RiNotification2Line className="text-2xl" />
						</span>
						<span className={`${isCollapsed ? "hidden" : ""}`}>
							Notifications
						</span>
					</Link>
				</ul>

				<Link
					className={`navlink logout flex items-center px-0 py-4 ${
						isCollapsed ? "" : "px-8"
					}`}>
					<span className={`mr-5 ${isCollapsed ? "hidden" : ""}`}>Logout</span>
					<span className="">
						<RiLogoutBoxRLine className="text-2xl" />
					</span>
				</Link>
			</div>
		</section>
	);
}
