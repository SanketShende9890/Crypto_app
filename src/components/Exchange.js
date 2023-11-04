import React from "react";
import exchangeIconA from '../assets/exchange_icon_1.png';
import exchangeIconB from '../assets/exchange_icon_2.png';
import exchangeIconC from '../assets/exchange_icon_3.png';


const Exchange = () => {
  return (
    <section className="mt-20">
      <div className="overflow-hidden relative mx-auto mt-8 max-w-7xl px-3 flex justify-center items-center flex-col lg:flex-row">
        <div className="w-full lg:w-auto flex flex-col md:flex-row justify-center items-center px-6 lg:pl-8">
        
        <div>

        <h1 className="text-3xl lg:text-4xl font-bold">
        One click, instant payout with credit or debit card.
          </h1>
          <p className="text-base mt-6" style={{ lineHeight: "24px" }}>
          Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.
          </p>
          <div className="mt-10">
            <div className="flex justify-start items-center w-full my-8">
                <img className="w-16" src={exchangeIconA} alt="" />
                <h5 className="font-bold text-xl ml-8">Create an account</h5>
            </div>
            <div className="flex justify-start items-center w-full my-8 ml-10">
                <img className="w-16" src={exchangeIconB} alt="" />
                <h5 className="font-bold text-xl ml-8">Link your bank account</h5>
            </div>
            <div className="flex justify-start items-center w-full my-8 ml-20">
                <img className="w-16" src={exchangeIconC} alt="" />
                <h5 className="font-bold text-xl ml-8">Start buying & selling</h5>
            </div>
          </div>
        </div>


        </div>
        <div className="w-full  text-center lg:text-left px-6 lg:pl-8 ">
            <div  className="card-bg w-[447px] h-[582px] rounded-xl">

            </div>
        </div>
      </div>
    </section>
  );
};

export default Exchange;
