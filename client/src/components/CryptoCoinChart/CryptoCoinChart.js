import React from "react";
import moment from "moment";
import { useQuery } from "@apollo/client";
import { Line } from "react-chartjs-2";
import { FETCH_COIN_CHART_HISTORY } from "../../graphql/queries";

const CryptoCoinChart = ({ coinId, days, full }) => {
  const { loading, data, error } = useQuery(FETCH_COIN_CHART_HISTORY, {
    variables: {
      coin: coinId,
      days: days,
    },
  });

  if (loading) return <h1>chartLoading</h1>;
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
        ticks: {
          maxTicksLimit: days,
        },
      },
    },
  };

  return (
    <Line
      data={chartData}
      options={full ? fullChartOptions : miniChartOptions}
      height={250}
      width={650}
    />
  );
};

export default CryptoCoinChart;
