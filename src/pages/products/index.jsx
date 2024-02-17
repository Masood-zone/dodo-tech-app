import React from "react";
import thumbIcon from "../../assets/svg/thumbnail.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Thumbnail from "../../components/thumbnail";
import Card from "../../components/card";
import {
  BOARD_SERVICES,
  FAQ,
  PRODUCTS_SERVICES,
  PRODUCT_LIST_DATA,
} from "../../data/productsData";
import ServicesCard from "../../components/card/servicesCard";
import manImage from "../../assets/images/businessman-photo.jpg";
import BannerCard from "../../components/card/bannerCard";
import Faq from "../../components/faq";

function Products() {
  return (
    <div className="flex flex-col my-20 w-full">
      {/* Top Section */}
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#031AFD] to-blue-400 py-3">
            Why We Built Dodo?
          </h1>
          <p className="font-bold text-2xl py-3 text-light-gray">
            Increase workplace productivity by transforming enterprise
            communications.
          </p>
          <p className="text-light-gray py-4">
            The problem of combining communication and connection in companies
            across the companies is very decentralized and difficult. Many at a
            times, most companies use a combined medium of communication across
            multiple industries to talk which is static, immobile, non-legacy
            and very outdated and a list faction in between the communication
            and not enhancing productivity for the team.
          </p>
          <Link
            to="/pricing"
            role="button"
            className="w-max flex gap-2 m-auto items-center bg-[#031AFD] text-white p-3 my-2 rounded-md hover:bg-[#2939cb]"
          >
            Sign up and use Dodo for free.
            <FaArrowRightLong />
          </Link>
        </div>
        {/* Image  */}
        <div className="w-full">
          <Thumbnail icon={thumbIcon} size="w-[400px] h-96" />
        </div>
      </section>
      {/* Products list section */}
      <section className="flex flex-col items-center justify-start px-10 mt-20 max-md:p-0">
        <Card
          cardData={PRODUCT_LIST_DATA}
          icon={thumbIcon}
          size="w-full h-96 bg-base-200"
        />
      </section>
      {/* Services section */}
      <section className="flex flex-col items-center justify-center gap-5 mt-14">
        <ServicesCard
          data={PRODUCTS_SERVICES}
          title="What Dodo offered compared to the current communication stack?"
          message="Dodo isn't just a tool for sending messages, it's a place where
        workflows between all your teams, tools, customers, and partners -
        wherever and whenever you're working."
        />
      </section>
      {/* Banner section */}
      <section className="mt-12">
        <BannerCard
          title="How to on-board your organization to Dodo"
          image={manImage}
          data={BOARD_SERVICES}
        />
      </section>
      {/* FAQ section */}
      <section className="my-28 px-10 flex flex-col">
        <Faq data={FAQ} />
      </section>
    </div>
  );
}

export default Products;
