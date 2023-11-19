import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import Loader from "react-js-loader";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Link, useNavigate, useParams } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [5, 8, 10, 6, 12, 4, 2],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Carousel = () => {
  const currency = "USD";
  const [trendingData, setTrendingData] = useState([]);
  const [apiStatus, setApiStatus] = useState(false);

  const handleData = async () => {
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
      setTrendingData(response.data.data.coins);
      setApiStatus(true);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  const goToCoinPage = (uuid) => {
    // navigate(`/coin/${uuid}`);
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = trendingData.map((ele, index) => (
    <Link
      to={`/coin/${ele.uuid}`}
      onClick={() => goToCoinPage(ele.uuid)}
      key={index}
      onDragStart={handleDragStart}
      role="presentation"
      className="flex flex-col justify-between items-center p-4 coin-card"
    >
      <div style={{height: '50px'}} className="w-full flex justify-between items-center">
        <img className="h-full" src={ele.iconUrl} alt="" />
        <div className="relative" style={{ height: "100%" }}>
          <Line options={options} data={data} />
          <p className={`${ele.change >= 0 ? "profit" : "loss" } text-md font-semibold absolute top-0 left-0`}>
            {
            ele.change >= 0 ? "+" : ""
            }
            {
              ele.change
            } %
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-end">
        <div>
          <span style={{ color: "#A5ADCF" }} className="block text-lg mb-3">
            {ele.name}
          </span>
          <p
            style={{ lineHeight: "1" }}
            className="text-2xl font-semibold leading-none"
          >
            {(() => {
              const priceValue = Number(ele.price);
              const stringValue = priceValue.toString();
              const decimalIndex = stringValue.indexOf(".");
              const digitsBeforeDecimal =
                decimalIndex !== -1 ? decimalIndex : stringValue.length;

              switch (digitsBeforeDecimal) {
                case 1:
                  return Number(ele.price).toFixed(8);
                case 2:
                  return Number(ele.price).toFixed(6);
                case 3:
                  return Number(ele.price).toFixed(4);
                case 4:
                  return Number(ele.price).toFixed(2);
                default:
                  return Number(ele.price).toFixed(1);
              }
            })()}
          </p>
        </div>
        <div>
          <span style={{ color: "#5D6588" }} className="uppercase text-md">
            {ele.symbol}
          </span>
        </div>
      </div>
    </Link>
  ));

  const responsive = {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1500: {
      items: 4,
    },
  };
  return (
    <section className="mt-10">
      <div style={{ height: "50%", display: "flex", alignItems: "center" }}>
        {!apiStatus ? (
          <Loader
            type="rectangular-ping"
            bgColor="#1e68f6"
            color="green"
            size={100}
          />
        ) : (
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items}
            // paddingLeft={20}
            // paddingRight={20}
          />
        )}
      </div>
    </section>
  );
};

export default Carousel;
