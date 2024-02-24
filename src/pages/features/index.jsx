import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import { FAQ, FEATURES_DATA, FEATURES_SERVICES } from "../../data/featuresData";
import ServicesCard from "../../components/card/servicesCard";
import { banner, benefitOne, feature } from "../../assets/images/index";
import Faq from "../../components/faq";

function Features() {
  return (
    <div className="flex flex-col my-20 w-full">
      {/* Top Section */}
      <section className="flex gap-5 max-w-7xl mx-auto max-lg:flex-col-reverse max-lg:mx-5">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#031AFD] to-blue-400 py-3">
            Discover a new way of corporate communication.
          </h1>
          <p className="text-light-gray my-8 ">
            Bring the right people and information together in channels. Share
            ideas, make decisions and move forward with a common purpose and
            place.
          </p>
          <Link
            to="/pricing"
            role="button"
            className="w-max flex gap-2  items-center bg-[#031AFD] text-white p-3 my-2 rounded-md hover:bg-[#2939cb]"
          >
            Sign up and use Dodo for free.
            <FaArrowRightLong />
          </Link>
        </div>
        {/* Image */}
        <div className="w-full overflow-hidden">
          <img src={benefitOne} alt="business-bubble" className="rounded-md" />
        </div>
      </section>
      {/* Features list section */}
      <section className="flex flex-col items-center justify-start px-10 mt-28 max-lg:p-0 max-lg:justify-start max-lg:items-start">
        <Card
          cardData={FEATURES_DATA}
          icon={feature}
          size="w-full h-full max-lg:h-[450px]"
          isFeature
        />
      </section>
      {/* Services section */}
      <section className="flex flex-col items-center justify-center max-lg:justify-start max-lg:items-start gap-16 my-28">
        <ServicesCard
          data={FEATURES_SERVICES}
          title="A communication that suits your workplace, however you work."
        />
      </section>
      {/* Banner section */}
      <section className="my-28">
        <img src={banner} alt="banner" className="w-full" />
      </section>
      {/* FAQ section */}
      <section className="my-48 px-10 flex flex-col max-lg:p-0">
        <Faq data={FAQ} />
      </section>
    </div>
  );
}

export default Features;
