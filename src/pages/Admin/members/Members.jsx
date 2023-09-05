import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import MemberMain from "./MemberMain";
import "../members/Members.css";

export default function Members() {
	return (
		<main className="flex w-full h-screen">
			<Sidebar />
			<div className="w-full h-fit px-16 py-4">
				<div className="z-20">
					<Header />
				</div>
				<div className="member-main">
					<MemberMain />
				</div>
			</div>
		</main>
	);
}
