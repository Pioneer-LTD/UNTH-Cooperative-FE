import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import PasswordReset from "./pages/password/PasswordReset";

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
			</Routes>
		</>
	);
}

export default App;
