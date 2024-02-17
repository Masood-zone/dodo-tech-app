import React from "react";
import ServicesCard from "./servicesCard";

function BannerCard({ image, data, title }) {
  return (
    <div className="card h-[500px] rounded-none card-side max-md:h-max max-md:flex-col max-md:bg-[#305384]">
      <figure className="w-max h-full max-md:w-full">
        <img
          src={image}
          alt="plaform-portfolio"
          className="w-full h-full max-md:h-96"
        />
      </figure>
      <div className="card-body flex flex-col items-center justify-center py-8">
        <h2 className="card-title text-white text-4xl font-bold my-1">
          {title}
        </h2>
        <div className="flex max-md:flex-wrap max-w-5xl items-center justify-center gap-8 text-center mt-12">
          <ServicesCard data={data} color="text-white" />
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
