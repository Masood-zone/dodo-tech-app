import React from "react";
import Carousel from "../carousel";
import { slides } from "../../data/carouselData.json";
import { Outlet } from "react-router-dom";
function FormContainer() {
  return (
    <div className="flex items-center my-5 px-5">
      {/* Carousel */}
      <div className="carousel w-[55%] max-md:hidden flex items-center justify-center">
        <Carousel data={slides} />
      </div>
      {/* Form Component */}
      <div className="w-[65%] m-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default FormContainer;
