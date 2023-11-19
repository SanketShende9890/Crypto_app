import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinChart from "./CoinChart";
import axios from "axios";
import Loading from "../common/Loading";
import Features from "./Features";

const SinglePage = () => {
  const id = useParams();
  const [coinInfo, setCoinInfo] = useState("");
  const [dataStatus, setDataStatus] = useState(false);

  const getCoinInfo = async () => {
    const options = {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${id.coinId}`,
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
      },
      headers: {
        "X-RapidAPI-Key": "9cf87f42camsh6cb9184a0f2c401p1d8e10jsn2027d43e78eb",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setCoinInfo(response.data.data.coin);
      setDataStatus(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCoinInfo();
  }, []);
  return (
    <>
    
    {dataStatus !== 'success' ? (
      <section className="pt-20 mb-10">
      <div className="mx-auto mt-8 max-w-7xl px-3 flex flex-col lg:flex-row justify-center items-center ">
        <div className="w-full lg:w-1/4 flex flex-col justify-center items-center border-r-0 lg:border-r-2 lg:border-slate-700 px-0 lg:px-4">
          <img className="w-32 my-3" src={coinInfo?.iconUrl} alt="" />
          <h2 className="text-center text-3xl font-bold mb-6">
            {coinInfo.name}
          </h2>
          <div className="w-full md:w-1/2 lg:w-full mb-10 px-2">
            <p className="text-justify">{coinInfo.description}</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-full flex justify-between items-center mb-2 border-b-2 border-slate-700 py-3 px-2">
            <h3 className="text-lg font-bold ">Rank</h3>
            <h3 className="text-lg ">{coinInfo?.rank}</h3>
          </div>
          <div className="w-full md:w-1/2 lg:w-full flex justify-between items-center mb-2 border-b-2 border-slate-700 py-3 px-2">
            <h3 className="text-lg font-bold ">Current Price</h3>
            <h3 className="text-lg ">
              {(() => {
                const priceValue = Number(coinInfo?.price);
                const stringValue = priceValue.toString();
                const decimalIndex = stringValue.indexOf(".");
                const digitsBeforeDecimal =
                decimalIndex !== -1 ? decimalIndex : stringValue.length;
                
                switch (digitsBeforeDecimal) {
                  case 1:
                    return Number(coinInfo?.price).toFixed(8);
                    case 2:
                      return Number(coinInfo?.price).toFixed(6);
                      case 3:
                    return Number(coinInfo?.price).toFixed(4);
                    case 4:
                      return Number(coinInfo?.price).toFixed(2);
                      default:
                        return Number(coinInfo?.price).toFixed(1);
                      }
                    })()}
            </h3>
          </div>
          <div className="w-full md:w-1/2 lg:w-full flex justify-between items-center mb-2 border-b-2 border-slate-700 py-3 px-2">
            <h3 className="text-lg font-bold ">Market cap</h3>
            <h3 className="text-lg ">{coinInfo?.marketCap}</h3>
          </div>
        </div>
        <CoinChart coin={id} />
      </div>
    </section>
  ) : (
    <Loading type={"spinner-default"} />
    )}

    <Features />

                    </>
  );
};

export default SinglePage;
