import React from "react";
import Thumbnail from "../thumbnail";

function Card({ cardData, icon, size }) {
  return cardData.map((data) =>
    data.id % 2 !== 0 ? (
      <div
        key={data.id}
        className="w-full flex items-center max-md:flex-col gap-10 mt-16 max-md:items-start max"
      >
        <div className="w-full">
          <Thumbnail icon={icon} size={size} />
        </div>
        <div className="w-full">
          <h1 className="text-light-gray text-3xl max-md:text-2xl font-bold mb-10 max-md:mb-2">
            {data.title}
          </h1>
          <p className="text-light-gray text-sm py-5 max-md:p-1">
            {data.message}
          </p>
        </div>
      </div>
    ) : (
      <div
        key={data.id}
        className="w-full flex items-center gap-10 mt-16 max-md:flex-col-reverse"
      >
        <div className="w-full">
          <h1 className="text-light-gray text-3xl max-md:text-2xl font-bold mb-10 max-md:mb-2">
            {data.title}
          </h1>
          <p className="text-light-gray text-sm py-5 max-md:p-1">
            {data.message}
          </p>
        </div>
        <div className="w-full">
          <Thumbnail icon={icon} size={size} />
        </div>
      </div>
    )
  );
}

export default Card;
