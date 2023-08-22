import { useState } from "react";
import AuthSidebar from "../../components/authSidebar";
import { BsFillPersonFill } from "react-icons/bs";
import Input from "../../components/input";
import Button from "../../components/button";

const Login = () => {
  const [role, setRole] = useState("");

  const handleRoleChange = (event) => {
    const value = event.target.value;
    setRole(value);
    console.log(role); // Log the selected value to the console
  };


  return (
    <main className="flex">
      <AuthSidebar />
      <section className="flex justify-center items-center border border-black w-full text-center" >
        <div className=" borde borde-black w-2/3">
        <h1 className="font-semibold">Login</h1>
        <div className="flex justify-center mt-10 mb-10 items-center font-medium">
          <label htmlFor="role">Login as</label>
          <div className="border bg-light-primary-blue rounded flex items-center ml-5 py-1 px-2">
            <BsFillPersonFill />
            <select
              name="member"
              id="role"
              className="border bg-light-primary-blue rounded outline-none"
              onChange={handleRoleChange}
              value={role}
              >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <form action="" className="mb-4">
          {role === 'admin'? 
          <Input type={"text"} label={"Username"} placeHolder="e.g John Doe"></Input> :
          <Input type={"number"} label={"IPPIS Number"} placeHolder="1234567890"></Input>
        }
          <Input type={"password"} label={"Password"} placeHolder="**********"></Input>
        </form>
        <Button value={'Login'}></Button>
        </div>
      </section>
    </main>
  );
};

export default Login;
