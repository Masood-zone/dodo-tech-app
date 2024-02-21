import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  EXTENDED_PRICING_DATA,
  FAQ,
  PRICING_DATA,
} from "../../data/pricingData";
import { Check } from "../../assets/svgs";
import Table from "../../components/table";
import Faq from "../../components/faq";

function Pricing() {
  return (
    <div className="flex flex-col my-20 w-full">
      {/* Top Section */}
      <section className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2a3cde] to-blue-300 py-3">
          Do more with a Paid Dodo Subscription
        </h1>
        <p className="text-light-gray mt-14">
          Why upgrade? With paid Dodo subscriptions, there are more features,
          more connections, and even more collaboration.
        </p>
      </section>
      {/* Pricing Card */}
      <section className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mx-10 border-2 border-t-4 border-t-blue-600 mt-14">
        {PRICING_DATA.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-start justify-start border-r-2 px-2 pt-2"
          >
            {/* Heading & message */}
            <h1 className="text-xl font-medium py-5 text-heading-gray ">
              {data.title}
            </h1>
            <p className="text-sm text-light-gray py-2">{data.message}</p>
            {/* Pricing */}
            <p className="text-3xl py-2 font-medium text-heading-gray">
              {data.price}
            </p>
            {/* Button */}
            <button className="w-max flex gap-2 items-center bg-[#031AFD] text-white p-3 my-4 rounded-md hover:bg-[#2939cb]">
              Get Started
              <FaArrowRightLong />
            </button>
            {/* List */}
            <ul className="flex flex-col">
              {data.price_list.map((list) => (
                <li
                  className="flex items-center py-4 justify-start gap-2 text-light-gray"
                  key={list.id}
                >
                  <img src={Check} alt="check-icon" className="" />
                  {list.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      {/* Pricing List Extended */}
      <section className="overflow-x-auto mt-28 mx-10">
        <Table data={EXTENDED_PRICING_DATA} />
      </section>
      {/* Faq */}
      <section className="my-28 px-10 flex flex-col">
        <Faq data={FAQ} />
      </section>
    </div>
  );
}

export default Pricing;
