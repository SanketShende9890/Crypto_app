import React from "react";
import featureIconA from "../assets/feature_icon_1.png";
import featureIconB from "../assets/feature_icon_2.png";
import featureIconC from "../assets/feature_icon_3.png";
import secondVector from "../assets/illustration/VectorLineB.png";

const Features = () => {
  return (
    <section className="overflow-hidden relative mt-20 lg:mt-0">
      <div className="overflow-hidden relative mx-auto mt-8 max-w-7xl px-3 flex justify-center items-center flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-auto text-center lg:text-left px-6 lg:pl-8 ">
          <h1 className="text-3xl lg:text-4xl font-bold">
            The most trusted cryptocurrency platform.
          </h1>
          <p className="text-base mt-6" style={{ lineHeight: "24px" }}>
            Cryptolly has a variety of features that make it the best place to
            start trading
          </p>
          <button className="grad-btn md-btn w-full md:w-72 mt-10">
            Let’s Trade Now
          </button>
        </div>
        <div className="w-full mt-14 lg:w-auto flex flex-col md:flex-row justify-center items-center px-6 lg:pl-8">
          <div>
            <div className="feature-card mb-4 flex flex-col justify-center items-center p-6">
              <div className="w-24">
                <img src={featureIconA} alt="featureIconA" />
              </div>
              <h3 className="text-xl font-bold text-center my-4">
                Portfolio Manager
              </h3>
              <p className="text-center leading-6">
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
            </div>
            <div className="feature-card mb-4 flex flex-col justify-center items-center p-6">
              <div className="w-24">
                <img src={featureIconB} alt="featureIconB" />
              </div>
              <h3 className="text-xl font-bold text-center my-4">
                Mobile Apps
              </h3>
              <p className="text-center leading-6">
                Stay on top of the markets with the Cryptolly app for Android or
                iOS.
              </p>
            </div>
          </div>

          <div>
            <div className="feature-card mb-4 ml-0 md:ml-4 flex flex-col justify-center items-center p-6">
              <div className="w-24">
                <img src={featureIconC} alt="featureIconC" />
              </div>
              <h3 className="text-xl font-bold text-center my-4">
                Vault protection
              </h3>
              <p className="text-center leading-6">
                For added security, store your funds in a vault with time
                delayed withdrawals.
              </p>
            </div>
          </div>
        </div>
      </div>
        <img className="second-vector" src={secondVector} alt="" />
    </section>
  );
};

export default Features;
