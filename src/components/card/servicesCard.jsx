import React from "react";

function ServicesCard({ color, data, title, message }) {
  return (
    <>
      <h1 className="text-light-gray text-4xl font-bold my-5">{title}</h1>
      <p className="text-light-gray text-sm my-1">{message}</p>
      {/* List section */}
      <div className="flex max-md:flex-wrap max-w-7xl items-center justify-center gap-8 text-center mt-12">
        {data.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-center flex-col gap-2"
          >
            <img src={product.icon} alt="icon" />
            <h1
              className={`${
                color ? "text-white" : "text-heading-gray"
              } font-bold text-lg mb-3`}
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
