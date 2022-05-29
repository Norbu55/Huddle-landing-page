import React from "react";
import image from "./images/illustration-mockups.svg";

const Photo = () => {
  return (
    <div className="photo">
      <h1 className="photo-heading">Huddle</h1>
      <img src={image} alt="photo" />
    </div>
  );
};

export default Photo;
