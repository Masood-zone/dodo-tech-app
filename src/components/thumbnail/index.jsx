import React from "react";

function Thumbnail(props) {
  return (
    <div className="rounded-lg overflow-hidden flex items-center justify-center max-md:w-full h-full mt-5 max-sm:m-auto max-sm:h-full">
      <img src={props.icon} alt="thumbnail-icon" className={props.size} />
    </div>
  );
}

export default Thumbnail;
