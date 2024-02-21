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
            ? "w-full h-96 flex items-center max-md:flex-col gap-24 my-5 justify-between max-md:items-start"
            : "w-full h-96 flex items-center max-md:flex-col gap-24 my-28 justify-between max-md:items-start"
        }`}
      >
        <div className="w-full">
          <Thumbnail icon={data.icon ? data.icon : icon} size={size} />
        </div>
        <div className="w-full">
          <h1 className="text-heading-gray text-3xl max-md:text-2xl font-bold mb-10 max-md:mb-2">
            {data.title}
          </h1>
          {hasList ? (
            <ul className="list-disc ml-16">
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
        className="w-full h-96 flex items-center justify-between gap-24 my-28 max-md:flex-col-reverse"
      >
        <div className="w-full">
          <h1 className="text-heading-gray text-3xl max-md:text-2xl font-bold mb-10 max-md:mb-2">
            {data.title}
          </h1>
          {hasList ? (
            <ul className="list-disc ml-16">
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
        <div className="w-full">
          <Thumbnail icon={data.icon ? data.icon : icon} size={size} />
        </div>
      </div>
    )
  );
}

export default Card;
