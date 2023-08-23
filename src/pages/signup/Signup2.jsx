import React from "react";
import Input from "../../components/input";

const Signup2 = ({ role }) => {
  return (
    <>
      <div className=" text-start mb-3">
        <p>Gender*</p>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male" className="ml-2">
          Male
        </label>

        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          className="ml-3"
        />
        <label htmlFor="female" className="ml-2">
          Female
        </label>
      </div>

      <div className="mb-2 text-start">
        <label htmlFor="department" className="mb-1"> Department Unit*</label>
        <select
          name="department"
          id="department"
          className="border border-slate-400 rounded outline-none w-full p-2 mt-1"
        //   defaultValue={}
        >
          <option value="nursing" disabled selected>
            Select Any      
          </option>
          <option value="Doctor">Doctor</option>
          <option value="Scientist">Scientist</option>
        </select>
      </div>
      <div className=" mb-2 text-start">
        <label htmlFor="designation"> Designation*</label>
        <select
          name="designation"
          id="designation"
          className="border border-slate-400 rounded outline-none w-full p-2 mt-1"
        >
          <option value="nursing" disabled selected>
            Select Any
          </option>
          <option value="Doctor">Doctor</option>
          <option value="Scientist">Scientist</option>
        </select>
      </div>
      <Input
        type={"number"}
        label={"Phone Number"}
        placeHolder="e.g 08012345678"
      ></Input>
    </>
  );
};

export default Signup2;
