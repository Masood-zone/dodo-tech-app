import React from "react";
import FormHeader from "../../components/header/formHeader";
import Forms from "../../components/forms";

function ForgotPassword() {
  const forgotPasswordData = [
    {
      label: "Phone number",
      name: "phoneNumber",
      placeholder: "Enter phone number",
      type: "number",
    },
  ];
  const handleSubmit = (values, { resetForm }) => {
    const data = {
      phoneNumber: values.phoneNumber,
    };
    console.log(data);
    resetForm();
  };
  return (
    <div className="flex flex-col items-center justify-center max-w-xl">
      {/* Header */}
      <FormHeader
        title="Forgot Password"
        hasGradient={false}
        message="Provide your phone to continue. A Password reset code will be sent to you."
      />
      {/* Forms */}
      <div className="w-[75%]">
        <Forms
          data={forgotPasswordData}
          btnTitle="Continue"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default ForgotPassword;
