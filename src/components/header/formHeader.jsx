import React from "react";

function FormHeader({ message, title, hasGradient }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1
        className={`my-5 font-bold text-4xl ${
          hasGradient ? "gradient-text" : ""
        }`}
      >
        {title}
      </h1>
      <p className="my-5  text-light-gray">{message}</p>
    </div>
  );
}

export default FormHeader;
