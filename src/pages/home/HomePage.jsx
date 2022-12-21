import React from "react";
import Millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/CryptoApi";
import CryptocurrenciesPage from "../cryptocurrencies/CryptocurrenciesPage";
import NewsPage from "../news/NewsPage";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  // console.log(data)

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
      <div className="home-heading-container">
        <Typography level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Typography>
        <Typography level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Typography>
      </div>
      <CryptocurrenciesPage simplified />
      <div className="home-heading-container">
        <Typography level={2} className="home-title">
          Latest Crypto News
        </Typography>
        <Typography level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Typography>
      </div>
      <NewsPage simplified />
    </>
  );
};

export default HomePage;
