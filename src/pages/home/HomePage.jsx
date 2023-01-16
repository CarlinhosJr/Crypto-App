import React from "react";
import Millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../redux/CryptoApi";
import CryptocurrenciesPage from "../cryptocurrencies/CryptocurrenciesPage";
import NewsPage from "../news/NewsPage";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data)

  if (isFetching) return "Loading...";

  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={Millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={Millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={Millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="flex justify-between items-center mt-10 ">
        <Typography level={2} className="text-xl">
          Top 10 Cryptocurrencies in the world
        </Typography>
        <Typography level={3} className="text-lg">
          <Link to="/cryptocurrencies">Show More</Link>
        </Typography>
      </div>
      <CryptocurrenciesPage simplified />
      <div className="flex justify-between items-center mt-12 ">
        <Typography level={2} className="text-xl">
          Latest Crypto News
        </Typography>
        <Typography level={3} className="text-lg">
          <Link to="/news">Show More</Link>
        </Typography>
      </div>
      <NewsPage simplified />
    
    </>
  );
};

export default HomePage;
