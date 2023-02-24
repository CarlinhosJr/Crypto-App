import React, { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Select } from "antd";
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../../redux/CryptoApi";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import LineChart from "../../components/LineChart";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({coinId, timeperiod});
  const cryptoDetails = data?.data?.coin;
  console.log(data);
  console.log(coinHistory);
  
  if (isFetching) return "Loading...";

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    {
      title: "Price to USD",
      value: `${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "PriceAt",
      value: `${cryptoDetails?.priceAt && millify(cryptoDetails?.priceAt)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Market Cap",
      value: `${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <DollarCircleOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="lg:m-8">
      <Col className=" flex flex-col justify-center items-center gap-3">
        <h1 className=" text-3xl font-extrabold text-sky-600">
          {cryptoDetails.name} ({cryptoDetails.symbol}) Price
        </h1>
        <p className="text-zinc-600">
          {cryptoDetails.name} live price in Us dollars. View valeu statistics,
          market cap and supply.
        </p>
      </Col>
      <Select
        defaultValue="7d"
        className="select-timeperiod mt-8 w-40"
        placeholder="Select time period "
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      
      {/* Line chart */}

      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name}/>

      {/* statistics cryptocurrency */}

      <Col className="lg:flex lg:justify-around mt-10">
        <Col>
          <Col>
            <h2 className="text-lg text-center font-bold text-zinc-900">
              {cryptoDetails.name} Value Statistics
            </h2>
            <p className="text-zinc-600 mb-4 text-center">An overview showing the stats of {cryptoDetails.name}</p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col
              key={title}
              className="flex justify-between p-5 opacity-90 border-b border-[#d9d9d9] hover:bg-white hover:transition-colors"
            >
              <Col className="flex gap-2 ">
                <div>{icon}</div>
                <div>{title}</div>
              </Col>
              <span className="font-bold">{value}</span>
            </Col>
          ))}
        </Col>

        {/* stats for all cryptocurrency combined */}

        <Col className="lg:mt-0 mt-10">
          <Col >
            <Col >
              <h2 className="text-lg text-center font-bold  text-zinc-900">Other Statistics</h2>
              <p className="text-zinc-600 mb-4 text-center">An overview showing the stats of all cryptocurrencies</p>
            </Col>
            {genericStats.map(({ icon, title, value }) => (
              <Col key={title} className=" flex justify-between p-5 opacity-90 border-b border-[#d9d9d9] hover:bg-white hover:transition-colors">
                <Col className="flex gap-2">
                  <span>{icon}</span>
                  <span>{title}</span>
                </Col>
                <span className="font-bold">{value}</span>
              </Col>
            ))}
          </Col>
        </Col>
      </Col>

      {/* MORE INFORMATION ABOUT CRYPTOCURRENCIE */}

      <Col className=" lg:flex lg:justify-around lg:gap-10 mt-10 pt-5">
        <Row className="xl:w-[600px] lg:w-[400px]">
          <h3 className="coin-details-heading font-bold xl:text-xl lg:text-lg">
            <span>What is {cryptoDetails.name}?</span> 
            <p>MAINTENANCE...</p>
          </h3>
        </Row>

        {/* LINKS THE CRYPTOCURRENCIES */}

        <Col className="xl:flex-1 lg:mb-0 mb-10">
          <span className=" flex justify-center font-bold lg:text-3xl lg:mt-0 text-2xl mt-8">{cryptoDetails.name} Links</span>
          {cryptoDetails.links?.map((link) =>(
            <Row className=" flex justify-between items-center p-5 border-b border-[#d9d9d9] hover:bg-[#F9F9F9]" key={link.name}>
              <span className=" capitalize ">{link.type}</span>
              <a href={link.url} target="_blank" rel="noreferrer" className="font-bold text-[#0071bd]">{link.name}</a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
