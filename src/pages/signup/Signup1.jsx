import React from 'react'
import Input from '../../components/input';

const Signup1 = ({role}) => {
  return (
    <>
      <Input
        type={"text"}
        label={"Full name"}
        placeHolder="e.g John Doe"
      ></Input>
      <Input
        type={"email"}
        label={"Email Address"}
        placeHolder="e.g johndoe@gmail.com"
      ></Input>
      <Input
        type={"password"}
        label={"Password"}
        placeHolder="at least 8 characters"
      ></Input>
      {/* {role !== "admin" ? ( */}
        <Input
          type={"number"}
          label={"IPPIS number"}
          placeHolder="123456"
        ></Input>
      {/* ) : null} */}
      <Input
        type={"password"}
        label={"confirm password"}
        placeHolder=""
      ></Input>
    </>
  );
}

export default Signup1