import React, { useState } from "react";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);
  return (
    <div className="relative flex items-center justify-center w-[390px] h-[600px]">
      {data.map((item, idx) => {
        return (
          <img
            key={item.alt}
            src={item.src}
            alt={item.alt}
            className={
              slide === idx
                ? "rounded-lg shadow-lg w-full h-full"
                : "rounded-lg shadow-lg w-full h-full hidden"
            }
          />
        );
      })}

      <span className="flex absolute bottom-4">
        {data.map((indicator, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx
                  ? "hover:cursor-pointer w-2 h-2 rounded-full border-none outline-none shadow-md m-1 bg-gray-100"
                  : "hover:cursor-pointer w-2 h-2 rounded-full border-none outline-none shadow-md m-1 bg-gray-500"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;
