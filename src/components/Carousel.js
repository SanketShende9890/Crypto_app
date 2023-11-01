import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";

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
  const handleData = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    setTrendingData(res.data);
  };

  useEffect(() => {
    // handleData()
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = trendingData.map((ele, index) => (
    <div
      key={index}
      onDragStart={handleDragStart}
      role="presentation"
      className="flex flex-col justify-between items-center p-4 coin-card"
    >
      <div className="w-full flex justify-between items-center">
        <img width={44} src={ele.image} alt="" />
        <div style={{ width: "120px" }}>
          <Line options={options} data={data} />
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
            USD {ele.current_price}
          </p>
        </div>
        <div>
          <span style={{ color: "#5D6588" }} className="uppercase text-md">
            {ele.symbol}
          </span>
        </div>
      </div>
    </div>
  ));

  const responsive = {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
    },
    1500: {
      items: 4,
    },
  };
  return (
    <section>
      <div style={{ height: "50%", display: "flex", alignItems: "center" }}>
        {!trendingData ? null : (
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
        <button onClick={handleData} className="outline-btn w-full">
          Click me
        </button>
      </div>
    </section>
  );
};

export default Carousel;
