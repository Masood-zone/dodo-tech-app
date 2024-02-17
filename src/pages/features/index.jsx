import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import chatIcon from "../../assets/images/chat-bubble.png";
import { Link } from "react-router-dom";
import mainImage from "../../assets/images/world-chat.jpg";
import Card from "../../components/card";
import {
  DEDICATED_SPACES,
  FAQ,
  FEATURES_DATA,
  FEATURES_SERVICES,
} from "../../data/featuresData";
import ServicesCard from "../../components/card/servicesCard";
import BannerCard from "../../components/card/bannerCard";
import meetingImg from "../../assets/images/meeting-img.jpg";
import Faq from "../../components/faq";

function Features() {
  return (
    <div className="flex flex-col my-20 w-full">
      {/* Top Section */}
      <section className="flex gap-5 max-w-7xl mx-auto">
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
          <img src={mainImage} alt="business-bubble" className="rounded-md" />
        </div>
      </section>
      {/* Features list section */}
      <section className="flex flex-col items-center justify-start px-10 mt-20 max-md:p-0">
        <Card
          cardData={FEATURES_DATA}
          icon={chatIcon}
          size="w-96 h-80 shadow-2xl"
        />
      </section>
      {/* Services section */}
      <section className="flex flex-col items-center justify-center gap-5 mt-14">
        <ServicesCard
          data={FEATURES_SERVICES}
          title="A communication that suits your workplace, however you work."
        />
      </section>
      {/* Banner section */}
      <section className="mt-28">
        <BannerCard
          title="Work together in dedicated spaces"
          data={DEDICATED_SPACES}
          image={meetingImg}
        />
      </section>
      {/* FAQ section */}
      <section className="my-28 px-10 flex flex-col">
        <Faq data={FAQ} />
      </section>
    </div>
  );
}

export default Features;
