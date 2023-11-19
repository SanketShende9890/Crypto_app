import React, { useState, useEffect } from "react";
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
import Loading from "../common/Loading";

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

const CoinChart = (props) => {
  const [historicData, setHistoricData] = useState("");
  const [days, setDays] = useState("24h");
  const [filter, setFilter] = useState(0);
  const [dataStatus, setDataStatus] = useState(false);

  const getData = async () => {
    const options = {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${props.coin.coinId}/history`,
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: days,
      },
      headers: {
        "X-RapidAPI-Key": "9cf87f42camsh6cb9184a0f2c401p1d8e10jsn2027d43e78eb",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setHistoricData(response.data.data.history);
      setDataStatus(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [days]);

  const chartFilters = ["24 Hours", "30 Days", "3 Months", "1 Year"];

  const handleFilter = (i) => {
    setFilter(i);
    switch (i) {
      case 0:
        setDays("24h");
        break;

      case 1:
        setDays("30d");
        break;

      case 2:
        setDays("3m");
        break;

      case 3:
        setDays("1y");
        break;

      default:
        setDays("24h");
        break;
    }
  };
  return (
    <div className="mt-10 lg:mt-0 w-full lg:w-3/4 flex flex-col justify-center items-center px-0 lg:px-6">
      {dataStatus ? (
        <>
          <div className="flex justify-center items-center gap-2 md:gap-8 my-6">
            {chartFilters.map((items, index) => (
              <button
                key={index}
                onClick={() => handleFilter(index)}
                className={`${
                  filter === index ? "grad-btn" : "outline-btn"
                } sm-btn`}
              >
                {items}
              </button>
            ))}
          </div>
          <div style={{height: '400px'}} className="w-full flex justify-center items-center graph-chart">
            <Line
              options={{
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                  point: {
                    radius: 1,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin.timestamp * 1000);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === '24h' ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    fill: false,
                    label: "",
                    data: historicData.map((coin) => coin.price),
                    borderColor: "#1e68f6",
                    legend: false,
                  },
                ],
              }}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CoinChart;
