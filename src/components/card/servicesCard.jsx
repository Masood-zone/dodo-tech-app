import React from "react";

function ServicesCard({ color, data, title, message }) {
  return (
    <>
      <div className="text-center w-[75%] max-lg:w-full">
        <h1 className="text-heading-gray text-2xl font-bold p-10 max-lg:p-0">
          {title}
        </h1>
        <p className="text-light-gray text-sm my-1">{message}</p>
      </div>
      {/* List section */}
      <div className="flex max-lg:flex-wrap max-w-7xl items-center justify-center gap-8 text-center  max-lg:max-w-lg mt-12 max-lg:gap-16 max-lg:m-5">
        {data.map((product) => (
          <div
            key={product.id}
            className="flex  items-center justify-center flex-col gap-2 max-lg:gap-5"
          >
            <img src={product.icon} alt="icon" />
            <h1
              className={`${
                color ? "text-white" : "text-heading-gray"
              } font-bold text-lg mb-3 max-lg:m-0`}
            >
              {product.title}
            </h1>
            <p className={`${color ? "text-white" : "text-light-gray"}`}>
              {product.message}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServicesCard;
