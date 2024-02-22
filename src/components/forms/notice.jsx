import React from "react";
import { Link } from "react-router-dom";

function Notice({ message, link, title }) {
  return (
    <p className="my-5">
      <span className="font-normal text-heading-gray">{message}</span>
      <Link className="text-heading-gray font-bold px-2" to={link}>
        {title}
      </Link>
    </p>
  );
}

export default Notice;
