import React, { useState } from "react";
import moment from "moment";
import { useQuery } from "@apollo/client";
import Loading from "../../util/Loading";
import { Line } from "react-chartjs-2";
import { FETCH_COIN_CHART_HISTORY } from "../../graphql/queries";
import { ChartSelector } from "./styles";

const CryptoCoinChart = ({ coinId, full, width, height }) => {
  const [days, setDays] = useState(7);

  const daysOption = [
    { value: 1, label: "1 Day" },
    { value: 7, label: "7 Days" },
    { value: 10, label: "10 Days" },
    { value: 15, label: "15 Days" },
    { value: 30, label: "30 Days" },
  ];

  const { loading, data, error } = useQuery(FETCH_COIN_CHART_HISTORY, {
    variables: {
      coin: coinId,
      days: days,
    },
  });

  if (loading)
    return (
      <div>
        <Loading height={70} width={100} />
      </div>
    );
  if (error) return <h1>{error}</h1>;

  const { prices } = data.fetchCoinChartHistory;

  const chartData = {
    labels: prices.map((coin, i) => {
      return moment(coin[0]).format("MMM Do");
    }),
    datasets: [
      {
        data: prices.map((coin) => coin[1]),
        pointRadius: 0,
        borderColor: "#17b978",
        borderWidth: 2,
        pointHitRadius: 5,
        backgroundColor: "rgb(23, 185, 120, 0.5)",
      },
    ],
  };

  const miniChartOptions = {
    plugins: {
      legend: { display: false },
    },

    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  const fullChartOptions = {
    plugins: {
      legend: { display: false },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxTicksLimit: days,
        },
      },
    },
  };

  return (
    <>
      {full ? (
        <ChartSelector
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          defaultValue={days[1]}
          options={daysOption}
          placeholder="7 Days"
          onChange={(e) => {
            setDays(e.value);
          }}
        />
      ) : (
        <></>
      )}

      <Line
        data={chartData}
        options={full ? fullChartOptions : miniChartOptions}
        height={height}
        width={width}
      />
    </>
  );
};

export default CryptoCoinChart;
