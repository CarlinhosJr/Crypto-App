import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row } from "antd";

function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = [];
  const coinTimestamp = [];

  // scroll through currency history
  for (let i = 0; i < coinHistory?.data?.history.length; i += 1) {

    // add each price into coinPrice array
    coinPrice.push(coinHistory.data.history[i].price);

    // add each date into coinTimestamp array (new Date and toLocaleDateString -  more readable )
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }

  // object data for Chartjs
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  // object options for Chartjs
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <h1 className="chart-title">{coinName} Price Chart</h1>
        <Col className="price-container">
          <h2 className="price-change">{coinHistory?.data?.change}%</h2>
          <h2 className="current-price">
            Current {coinName} Price: ${currentPrice}
          </h2>
        </Col>
      </Row>
      {/* <Line data={data} options={options} /> */}
    </>
  );
}

export default LineChart;
