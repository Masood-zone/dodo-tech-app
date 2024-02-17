import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Thumbnail from "../thumbnail";
import { Link } from "react-router-dom";

function Header({ title, note, message, icon, styling }) {
  return (
    <section className={`${styling}`}>
      {/* Top section */}
      <div className="text-center">
        <h1 className="text-4xl capitalize font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#031AFD] to-blue-400 py-3">
          {title}
        </h1>
        <p className="font-bold text-2xl py-3 text-light-gray">{note}</p>
        <p className="text-light-gray py-4">{message}</p>
        <Link
          to="/pricing"
          role="button"
          className="w-max flex gap-2 m-auto items-center bg-[#031AFD] text-white p-3 my-2 rounded-md hover:bg-[#2939cb]"
        >
          Sign up and use Dodo for free.
          <FaArrowRightLong />
        </Link>
      </div>
      {/* Image */}
      <div className="w-full">
        <Thumbnail icon={icon} size="w-full h-96 bg-base-300" />
      </div>
    </section>
  );
}

export default Header;
