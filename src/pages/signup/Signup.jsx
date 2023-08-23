import { useContext, useState } from "react";
import AuthSidebar from "../../components/authSidebar";
import { BsFillPersonFill } from "react-icons/bs";
import { appContext } from "../../contexts/appContext";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import Signup2 from "./Signup2";
import Signup1 from "./Signup1";

const Signup = () => {
  const { role, setRole } = useContext(appContext);

  const [activeComponent, setActiveComponent] = useState(1);

  const handleActiveComponent = () => {
    setActiveComponent((activeComponent + 1));
  };

  const handleRoleChange = (event) => {
    const value = event.target.value;
    setRole(value);
    console.log(role);
  };
  return (
    <main className="flex">
      <AuthSidebar />
      <section className="flex justify-center items-center w-full text-center">
        <div className=" borde borde-black w-2/3">
          <h1 className="font-semibold text-3xl">Create account</h1>
          <div className="flex justify-center mt-5 mb-10 items-center font-medium"></div>
          <form action="" className="mb-4">
            {activeComponent === 1 && <Signup1 />}
            {activeComponent === 2 && <Signup2 role={role} />}
          </form>
          <div
            onClick={() => {
              activeComponent === 1 ? handleActiveComponent() : null;
            }}
          >
            <Button value={"Continue"}></Button>
          </div>
          <p className="mt-2">
            Already have an account?
            <Link to="/" className="text-dark-primary-green">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
