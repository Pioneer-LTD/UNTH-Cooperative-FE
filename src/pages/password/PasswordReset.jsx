import AuthSidebar from "../../components/authSidebar";
import Button from "../../components/button";
import Input from "../../components/input";

export default function PasswordReset() {
	return (
		<main className="flex">
			<AuthSidebar />
			<section className="flex flex-col justify-center items-center border border-black w-full text-center">
				<div className="flex flex-col space-y-5 items-start borde borde-black w-3/5">
					<h4 className="text-xl text-left">
						Enter your email address and we’ll send you a link to reset your
						password
					</h4>
					<div className="flex flex-col py-5 w-full">
						<Input
							type="email"
							label="Email address"
							placeHolder="e.g johndoe@gmail.com"
						/>

						<div className="mt-3">
							<Button value={"SEND LINK"} />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
