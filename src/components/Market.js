import React, { useEffect, useState } from "react";
import secondVector from "../assets/illustration/VectorLineB.png";
import axios from "axios";
import Loading from "../common/Loading";
import Table from "./Table";


const Market = () => {
  const [coins, setCoins] = useState([]);
  const [state, setState] = useState(false);

  const getCoins = async () => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "9cf87f42camsh6cb9184a0f2c401p1d8e10jsn2027d43e78eb",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setCoins(response.data.data.coins);
      setState(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <>
      <section className="overflow-hidden relative mx-auto pt-40 max-w-7xl flex justify-center items-center flex-col">
        <h3 className="text-4xl font-semibold text-center mx-auto lg:mx-[350px] mb-10">
          A trusted and secure cryptocurrency exchange.
        </h3>
        <p className="font-normal text-center mb-2 mx-auto lg:mx-[300px]">
          Your guide to the world of an open financial system. Get started with
          the easiest and most secure platform to buy and trade cryptocurrency.
        </p>
        <div className="custom-search-box">
          <input placeholder="Enter your email address" type="text" />
          <button className="grad-btn md-btn w-44">Get Started</button>
        </div>
        <img className="second-vector" src={secondVector} alt="" />
      </section>

      <section className="pt-20">
        <div className="mx-auto mt-8 max-w-7xl px-3 flex justify-center items-center flex-col lg:flex-row">
          <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
            {state ? (
              <Table coins={coins}/>
            ) : (
              <Loading type={"spinner-default"} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Market;
