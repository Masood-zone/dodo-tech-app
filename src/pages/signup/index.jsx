import React from "react";
import FormHeader from "../../components/header/formHeader";
import Forms from "../../components/forms";
import Notice from "../../components/forms/notice";

function SignUp() {
  const newUserData = [
    {
      label: "Phone number",
      name: "phoneNumber",
      placeholder: "Enter phone number",
      type: "number",
    },
    {
      label: "Create a password",
      name: "password",
      placeholder: "Create password",
      type: "password",
    },
    {
      label: "Confirm password",
      name: "confirmPwd",
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
        message="Welcome to Dodo. Provide the information below to create an account."
      />
      {/* Forms */}
      <div className="w-[75%]">
        <Forms data={newUserData} btnTitle="Sign up" onSubmit={handleSubmit} />
      </div>
      {/* Message */}
      <Notice
        message="Already have an account?"
        link="/forms/signin"
        title="Sign In"
      />
    </div>
  );
}

export default SignUp;
