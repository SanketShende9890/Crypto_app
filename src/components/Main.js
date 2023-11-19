import React from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import Features from "./Features.js";
import Exchange from "./Exchange.js";
import WhyChooseUs from "./WhyChooseUs.js";
import Media from "./Media.js";
import Redirect from "./Redirect.js";
import CTA from "./CTA.js";

import FirstVector from "../assets/illustration/VectorLineA.png";
import FifthVector from "../assets/illustration/VectorLineE.png";

const Main = () => {
  return (
    <>
      <section className="overflow-hidden relative">
        <Hero />
        <Carousel />
        <Features />
        <Exchange />
        <WhyChooseUs />
        <section className="overflow-hidden relative">
          <Media />
          <Redirect />
          <img className="fifth-vector" src={FifthVector} alt="" />
        </section>
        <CTA />
        <div className="first-grad"></div>
        <div className="second-grad"></div>
        <div className="third-grad"></div>
        <img className="first-vector" src={FirstVector} alt="" />
      </section>
    </>
  );
};

export default Main;
