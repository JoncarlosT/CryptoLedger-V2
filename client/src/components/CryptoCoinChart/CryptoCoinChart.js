import React from "react";
import { Query } from "react-apollo";
import { FETCH_COIN_CHART_HISTORY } from "../../graphql/queries";
import { Line } from "react-chartjs-2";
import moment from "moment";

const CryptoCoinChart = ({ coinId, days }) => {
  return (
    <Query
      query={FETCH_COIN_CHART_HISTORY}
      variables={{
        coin: coinId,
        days: days,
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <h1>chartLoading</h1>;
        if (error) return <h1>{error}</h1>;

        const { prices } = data.fetchCoinChartHistory;

        const chartData = {
          labels: prices.map((coin, i) => {
            return moment(coin[0]).format("MMM Do, h:mm:ss a");
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

        const chartOptions = {
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        };

        return (
          <Line
            data={chartData}
            options={chartOptions}
            height={250}
            width={650}
          />
        );
      }}
    </Query>
  );
};

export default CryptoCoinChart;
