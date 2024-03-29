import React from "react";
import Forms from "../../components/forms";
import Notice from "../../components/forms/notice";
import FormHeader from "../../components/header/formHeader";
import { Link } from "react-router-dom";

function SignIn() {
  const userData = [
    {
      label: "Phone number",
      name: "phoneNumber",
      placeholder: "Enter phone number",
      type: "number",
    },
    {
      label: "Password",
      name: "password",
      placeholder: "Enter password",
      type: "password",
    },
  ];

  const handleSubmit = (values, { resetForm }) => {
    const data = {
      phoneNumber: values.phoneNumber,
      password: values.password,
    };
    console.log(data);
    resetForm();
  };
  return (
    <div className="flex flex-col items-center justify-center max-w-xl">
      {/* Header */}
      <FormHeader
        title="Dodo"
        hasGradient
        message="Welcome. Provide your phone number and password to continue"
      />
      {/* Forms */}
      <div className="w-[75%]">
        <Forms data={userData} btnTitle="Sign In" onSubmit={handleSubmit} />
        <Link to="/forms/forgot-password" className="text-heading-gray">
          Forgot Password?
        </Link>
      </div>
      {/* Message */}
      <Notice
        message="Do not have an account yet?"
        link="/forms/login"
        title="Sign Up"
      />
    </div>
  );
}

export default SignIn;
