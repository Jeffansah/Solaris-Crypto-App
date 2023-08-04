import React from "react";
import { Line } from "react-chartjs-2";

import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  coinHistory?.data?.history?.map(({ price, timestamp }) => {
    coinPrice.push(price);
    const timeStamp = timestamp * 1000;
    coinTimestamp.push(new Date(timeStamp).toLocaleDateString());
  });

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
      <Row className="chart=header">
        <Col style={{ flexGrow: 1 }}>
          <Title level={2} className="chart-title">
            {coinName} Price Chart
          </Title>
        </Col>

        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
        <Line data={data} options={options} />
      </Row>
    </>
  );
};

export default LineChart;
