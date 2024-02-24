import React from "react";
import Thumbnail from "../thumbnail";

function Card({ cardData, icon, size, hasList, isFeature }) {
  return cardData.map((data) =>
    data.id % 2 !== 0 ? (
      // First card
      <div
        key={data.id}
        className={`${
          isFeature
            ? "w-full h-96 flex items-center gap-24 my-5 justify-between max-lg:items-center max-lg:gap-2 max-lg:mb-0 overflow-hidden max-lg:w-full max-lg:h-full max-lg:my-20 max-sm:flex-col max-sm:h-full  max-sm:my-20"
            : "w-full h-96 flex items-center gap-24 my-28 justify-between max-lg:items-center max-lg:gap-5 max-lg:mb-0 overflow-hidden max-lg:w-full max-lg:h-full max-lg:my-20 max-sm:flex-col max-sm:h-full  max-sm:my-20"
        }`}
      >
        <div className="w-full h-full">
          <Thumbnail icon={data.icon ? data.icon : icon} size={size} />
        </div>
        <div className="w-full">
          <h1 className="text-heading-gray text-3xl max-md:text-2xl font-bold mb-10 max-md:mb-2">
            {data.title}
          </h1>
          {hasList ? (
            <ul className="list-disc ml-16 max-lg:m-0 max-lg:text-left max-lg:ml-5">
              {data.lists.map((list) => (
                <li className="py-2" key={list.id}>
                  {list.note}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
          <p className="text-light-gray text-sm py-5 max-md:p-1">
            {data.message}
          </p>
        </div>
      </div>
    ) : (
      // Second card
      <div
        key={data.id}
        className="w-full h-96 flex items-center justify-between gap-24 my-28 max-lg:gap-2 max-lg:h-full  overflow-hidden max-lg:my-2  max-sm:flex-col-reverse max-sm:h-full"
      >
        <div className="w-full">
          <h1 className="text-heading-gray text-3xl max-md:text-2xl font-bold mb-10 max-md:mb-2">
            {data.title}
          </h1>
          {hasList ? (
            <ul className="list-disc ml-16 max-lg:m-0 max-lg:text-left max-lg:ml-5">
              {data.lists.map((list) => (
                <li className="py-2" key={list.id}>
                  {list.note}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
          <p className="text-light-gray text-sm py-5 max-md:p-1">
            {data.message}
          </p>
        </div>
        <div className="w-full h-full">
          <Thumbnail icon={data.icon ? data.icon : icon} size={size} />
        </div>
      </div>
    )
  );
}

export default Card;
