import React from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import Features from "./Features.js";

import FirstVector from "../assets/illustration/VectorLineA.png";

const Main = () => {
  return (
    <>
      <div className="overflow-hidden relative">
        <Hero />
        <Carousel />
        <Features />
        <div style={{ height: "200vh" }}></div>

        <div className="first-grad"></div>
        <img className="first-vector" src={FirstVector} alt="" />
      </div>
    </>
  );
};

export default Main;
