import React from "react";

function Thumbnail(props) {
  return (
    <div className="rounded-lg overflow-hidden flex items-center justify-center max-md:w-full mt-5">
      <img src={props.icon} alt="thumbnail-icon" className={props.size} />
    </div>
  );
}

export default Thumbnail;
