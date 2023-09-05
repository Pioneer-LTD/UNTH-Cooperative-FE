import React, { useState } from "react";
import member1 from "../../../assets/member.png";
import Button from "../../../components/button";
import data from "../../../data.json";

import "./Members.css";

export default function Member({ startIndex, endIndex }) {
	return (
		<div>
			{data.slice(startIndex, endIndex).map((member, index) => (
				<div
					key={index}
					className="w-full flex  rounded items-center justify-between py-5 px-8 overflow-auto">
					<div className="flex space-x-5 items-center">
						<div className="flex flex-col space-y-2 items-center member">
							<img
								src={member.imageUrl}
								alt=""
								className=""
							/>
							<span
								className={`${
									member.status === "Active" ? "active-span" : "inactive-span"
								}`}>
								{member.status}
							</span>
						</div>
						<div className="flex flex-col space-y-2">
							<h2 className="font-semibold text-2xl">{member.fullName}</h2>
							<div className="flex space-x-5">
								<div>
									<label>IPPIS No:</label>
									<p>{member.ippisNo}</p>
								</div>
								<div>
									<label>Department:</label>
									<p>{member.department}</p>
								</div>
							</div>
							<div className="flex space-x-5">
								<div>
									<label>Designation:</label>
									<p>{member.designation}</p>
								</div>
								<div>
									<label>Phone No:</label>
									<p>{member.phoneNumber}</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<Button value="VIEW FULL PROFILE" />
					</div>
				</div>
			))}
		</div>
	);
}
