import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import PasswordReset from "./pages/password/PasswordReset";
import Members from "./pages/Admin/members/Members";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<SignUp />}
				/>
				<Route
					path="/resetpassword"
					element={<PasswordReset />}
				/>
				<Route
					path="/members"
					element={<Members />}
				/>
			</Routes>
		</>
	);
}

export default App;
