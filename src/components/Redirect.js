import React from "react";
import redirectIllustration from "../assets/illustration/redirect_illustration.png";
import googlePlay from "../assets/logos_google-play-icon.png";
import applePlay from "../assets/logos_apple-app-store.png";

const Redirect = () => {
  return (
    <section className="overflow-hidden relative mt-20 lg:mt-10">
      <div className="overflow-hidden relative mx-auto mt-8 max-w-7xl px-3 flex justify-center items-center flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-auto text-center lg:text-left px-6 lg:pl-8 ">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Build your crypto portfolio anywhere.
          </h1>
          <p className="text-base mt-6" style={{ lineHeight: "24px" }}>
            A powerful cryptocurrency exchange in your pocket. Buy, sell and
            trade crypto on the go.
          </p>

          <div className="hidden lg:flex flex-col justify-center items-start mt-16">
            <span className="font-bold text-sm">
              Get the Cryptolly Wallet Mobile App Now!
            </span>
            <div className="w-full flex justify-center items-center gap-10">
              <button className="outline-btn md-btn w-full md:w-72 mt-5 flex justify-center items-center">
                <div>
                  <img className="w-8 mr-6" src={googlePlay} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-normal text-sm">GET IT ON</p>
                  <span className="text-xl">Google Play</span>
                </div>
              </button>
              <button className="outline-btn md-btn w-full md:w-72 mt-5 flex justify-center items-center">
                <div>
                  <img className="w-8 mr-6" src={applePlay} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-normal text-sm">Download on the</p>
                  <span className="text-xl">App Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mt-14 lg:w-auto flex flex-col lg:flex-row justify-center items-center px-6 lg:pl-8">
          <img src={redirectIllustration} alt="" />

          <div className="w-full flex lg:hidden flex-col justify-center items-center">
            <span className="font-bold text-sm">
              Get the Cryptolly Wallet Mobile App Now!
            </span>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2">
              <button className="outline-btn md-btn w-full md:w-72 mt-5 flex justify-center items-center">
                <div>
                  <img className="w-8 mr-6" src={googlePlay} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-normal text-sm">GET IT ON</p>
                  <span className="text-xl">Google Play</span>
                </div>
              </button>
              <button className="outline-btn md-btn w-full md:w-72 mt-5 flex justify-center items-center">
                <div>
                  <img className="w-8 mr-6" src={applePlay} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-normal text-sm">Download on the</p>
                  <span className="text-xl">App Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="second-vector" src={secondVector} alt="" /> */}
    </section>
  );
};

export default Redirect;
