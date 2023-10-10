import React from "react";
import ImageCards from "./ImageCards";

const Image = () => {
  return (
    <div>
      <div>
        <div className="flex flex-wrap-reverse">
          <ImageCards />
        </div>
      </div>
    </div>
  );
};

export default Image;
