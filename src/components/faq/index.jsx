import React, { useState } from "react";

function Faq({ data }) {
  const [activeIndex, setActiveIndex] = useState();
  const handleToggle = (i) => {
    setActiveIndex(i === activeIndex ? "null" : i);
  };

  return (
    <>
      <h1 className="font-bold text-4xl mb-5">Freqeuntly Asked Questions</h1>
      <div className="w-full join join-vertical">
        {data.map((question, index) => (
          <div
            key={question.id}
            className="collapse collapse-arrow join-item py-5"
          >
            <input
              type="radio"
              name="my-accordion-2"
              checked={activeIndex === index}
              onChange={() => handleToggle(index)}
            />
            <div
              className={`collapse-title text-xl font-medium ${
                activeIndex === index
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-heading-gray"
              }`}
            >
              {question.title}
            </div>
            <div className="collapse-content text-light-gray">
              <p className="py-4">{question.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
