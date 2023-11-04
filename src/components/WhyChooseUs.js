import React from "react";
import whyChooseUsIllustration from "../assets/illustration/whyChooseUs_illustration.png";
import whyChooseUsIconA from "../assets/whyChooseUs_icon1.png";
import whyChooseUsIconB from "../assets/whyChooseUs_icon2.png";
import whyChooseUsIconC from "../assets/whyChooseUs_icon3.png";
import fourthVector from "../assets/illustration/VectorLineD.png";

const WhyChooseUs = () => {
  return (
    <section className="mt-20 lg:mt-10 overflow-hidden relative">
      <div className="overflow-hidden relative mx-auto mt-8 max-w-7xl px-3 flex justify-center items-center flex-col lg:flex-row-reverse">
        <div className="relative overflow-hidden w-full flex flex-col md:flex-row justify-center items-center px-6 lg:pl-8 mt-8">
          <div className="flex flex-col justify-center items-center text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold">
              We are the most trusted cryptocurrency platform.
            </h1>
            <p className="text-base mt-6" style={{ lineHeight: "24px" }}>
              We believe Cryptolly is here to stay — and that a future worth
              building is one which opens its doors and invites everyone in.
            </p>
            <div className="mt-10 flex flex-col justify-center items-center">
              <div className="w-[350px] md:w-[500px] lg:w-full flex justify-center items-start">
                <div className="mr-6">
                  <img className="w-32 lg:w-36" src={whyChooseUsIconA} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h5 className="text-xl font-bold mb-3">Clarity</h5>
                  <p className="text-slate-500 text-start">
                    We help you make sense of the coins, the terms, the dense
                    charts and market changes.
                  </p>
                </div>
              </div>
              <div className="w-[350px] md:w-[500px] lg:w-full flex justify-center items-start mt-10">
                <div className="mr-6">
                  <img className="w-32 lg:w-36" src={whyChooseUsIconB} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h5 className="text-xl font-bold mb-3">Confidence</h5>
                  <p className="text-slate-500 text-start">
                    Our markets are always up to date, sparking curiosity with
                    real-world relevance.
                  </p>
                </div>
              </div>
              <div className="w-[350px] md:w-[500px] lg:w-full flex justify-center items-start mt-10">
                <div className="mr-6">
                  <img className="w-32 lg:w-36" src={whyChooseUsIconC} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h5 className="text-xl font-bold mb-3">Community</h5>
                  <p className="text-slate-500 text-start">
                    We supports the crypto community, putting data in the hands
                    which need it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden w-full flex flex-col md:flex-row justify-center items-center px-6 lg:pl-8 mt-8">
          <img src={whyChooseUsIllustration} alt="" />
        </div>

      </div>
        <img className="fourth-vector" src={fourthVector} alt="" />
    </section>
  );
};

export default WhyChooseUs;
