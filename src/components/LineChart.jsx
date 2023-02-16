import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import { Col, Row } from "antd";

function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = [];
  const coinTimestamp = [];

  // scroll through currency history
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    // add each price into coinPrice array
    coinPrice.push(coinHistory?.data?.history[i].price);

    // add each date into coinTimestamp array (new Date and toLocaleDateString -  more readable )
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );

   
  }

  // object data for Chartjs
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
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
      <Row className="chart-header flex justify-between gap-12 mt-6">
        <h1 className="chart-title text-[#0071bd] text-2xl font-medium">
          {coinName} Price Chart
        </h1>
        <Col className="price-container">
          <span className="price-change font-black mr-5">
            {coinHistory?.data?.change}%
          </span>
          <span className="current-price font-black">
            Current {coinName} Price: ${currentPrice}
          </span>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
}

export default LineChart;
