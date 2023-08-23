import { useState } from "react";
import AuthSidebar from "../../components/authSidebar";
import Input from "../../components/input";
import { NavLink } from "react-router-dom";
import Button from "../../components/button";
import Dropdown from "../../components/dropdown";
import RadioInput from "../../components/radioInput";

const SignUp = () => {
	const [step, setStep] = useState(1);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [ippisNumber, setIppisNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [gender, setGender] = useState("");
	const [departmentUnit, setDepartmentUnit] = useState("");
	const [designation, setDesignation] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");


	const handleIndicatorClick = (indicatorStep) => {
		if (indicatorStep === 1) {
			setStep(1);
		} else if (indicatorStep === 2 && isStep1Complete()) {
			setStep(2);
		}
	};

	const isStep1Complete = () => {
		return (
			fullName !== "" &&
			email !== "" &&
			ippisNumber !== "" &&
			password !== "" &&
			confirmPassword !== ""
		);
	};

	const handleContinue = () => {
		if (step === 1 && isStep1Complete()) {
			setStep(2);
		}
	};

	const departmentOptions = ["Nursing", "Optometry", "Gynaecology"];
	const designationOptions = ["Chief Nursing Officer", "Head of Optometry"];
	const genderOptions = [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	];

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission logic here
	};

	return (
		<main className="flex">
			<AuthSidebar />
			<section className="flex justify-center items-center border border-black w-full text-center">
				<div className="borde borde-black w-2/3">
					<h1 className="text-2xl font-semibold">Create account</h1>
					<div className="mt-4 flex justify-center items-center">
						<span
							className={`mr-2 ${
								step === 1 ? "bg-green-700 text-white" : "bg-gray-300"
							} h-6 w-6 rounded-full inline-flex items-center justify-center cursor-pointer`}
							onClick={() => handleIndicatorClick(1)}>
							{1}
						</span>
						<div
							className={`mr-2 ${
								step === 1 ? "bg-gray-300" : "bg-green-700 text-white"
							} h-0.5 w-24 inline-block`}
						/>
						<span
							className={`mr-2 ${
								step === 2 ? "bg-green-700 text-white" : "bg-gray-300"
							} h-6 w-6 rounded-full inline-flex items-center justify-center cursor-pointer`}
							onClick={() => handleIndicatorClick(2)}>
							{2}
						</span>
					</div>

					<form
						onSubmit={handleSubmit}
						className="mb-4">
						{step === 1 && (
							<>
								<Input
									type="text"
									label="Full Name"
									placeHolder="e.g John Doe"
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									required
								/>
								<Input
									type="email"
									label="Email address"
									placeHolder="e.g johndoe@gmail.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<Input
									type="number"
									label="IPPIS Number"
									placeHolder="1234567890"
									value={ippisNumber}
									onChange={(e) => setIppisNumber(e.target.value)}
								/>
								<Input
									type="password"
									label="Password"
									placeHolder="**********"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<Input
									type="password"
									label="Confirm password"
									placeHolder="**********"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</>
						)}
						{step === 2 && (
							<div className="flex flex-col space-y-2">
								<RadioInput
									labelText={"Gender"}
									options={genderOptions}
									initialSelection={gender}
									updatedSelection={setGender}
								/>
								<Dropdown
									label={"Department unit"}
									value={departmentUnit}
									options={departmentOptions}
									onChange={(e) => setDepartmentUnit(e.target.value)}
								/>
								<Dropdown
									label={"Designation"}
									value={designation}
									options={designationOptions}
									onChange={(e) => setDesignation(e.target.value)}
								/>
								<Input
									type="text"
									label="Phone number"
									placeHolder="e.g 08012345678"
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
							</div>
						)}
						<div className="mt-5">
							<Button
								value={step === 1 ? "CONTINUE" : "REGISTER"}
								onClick={step === 1 ? handleContinue : null}
								type={step === 1 ? "button" : "submit"}
							/>
						</div>
					</form>

					<NavLink to={"/"}>
						<p>
							Already have an account?{" "}
							<span className="text-dark-primary-green">LOGIN</span>
						</p>
					</NavLink>
				</div>
			</section>
		</main>
	);
};

export default SignUp;
