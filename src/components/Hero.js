import React from 'react';
import mainBg from "../assets/illustration/main_illustration.png";


const Hero = () => {
  return (
    <section className="pt-20">
        <div className="mx-auto mt-8 max-w-7xl px-3 flex justify-center items-center flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 text-center lg:text-left px-6 lg:pl-8 ">
            <h1 className="text-4xl lg:text-5xl custom-line-height font-bold">
              A trusted and secure cryptocurrency exchange.
            </h1>
            <p className="text-base mt-6" style={{ lineHeight: "24px" }}>
              Your guide to the world of an open financial system. Get started
              with the easiest and most secure platform to buy and trade
              cryptocurrency.
            </p>
            <button className="grad-btn lg-btn w-full md:w-72 mt-10">
              Get Started Now
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-6">
            <img src={mainBg} alt="Main-background" />
          </div>
        </div>
      </section>
  )
}

export default Hero