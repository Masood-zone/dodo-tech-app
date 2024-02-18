import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { hero, demo } from "../../assets/images";
import Card from "../../components/card";
import { MAIN_DATA } from "../../data/mainData";
import ServicesCard from "../../components/card/servicesCard";

function Home() {
  return (
    <div className="flex flex-col w-full ">
      {/* Top Section */}
      <section className="h-[700px] flex items-center justify-between mx-auto">
        <div className="flex flex-col items-start justify-start ml-8 w-[85%]">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2a3cde] to-blue-300 py-3">
            Simplify how your organization communicates
          </h1>
          <p className="text-light-gray my-8 ">
            Dodo is an enterprise communicaiton platform that offers
            organization reliable and secure one-to-one calls, conference
            calling, mass broadcsat, one-on-one messaging, multimedia
            filesharing and cloud storage in a single app.
          </p>
          <Link
            to="/pricing"
            role="button"
            className="w-max flex gap-2 gradient-text items-center text-[#031AFD] py-3 p-3 my-2 rounded-md font-bold"
          >
            Dodo is free for use if you like.
            <FaArrowRightLong />
          </Link>
        </div>
        {/* Image */}
        <div className="w-full overflow-hidden">
          <img src={hero} alt="business-bubble" className="" />
        </div>
      </section>
      {/* Demo Section */}
      <section className="gap-5 mx-auto my-28 flex flex-col items-start justify-start px-10">
        <h1 className="text-heading-gray font-bold text-lg">Watch Demo</h1>
        <img src={demo} alt="Demo" className="w-full rounded-xl" />
      </section>
      {/* Dodo list section */}
      <section className="flex flex-col items-center justify-start px-10 mt-20 max-md:p-0">
        <Card cardData={MAIN_DATA} />
      </section>
      {/* Services list section */}
      <section className="">
        <ServicesCard
          data=""
          title="A communication tool that suits your workplace, however you work."
        />
      </section>
    </div>
  );
}

export default Home;
