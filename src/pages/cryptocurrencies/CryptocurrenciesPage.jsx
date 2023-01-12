import React, { useState, useEffect } from "react";
import Millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../redux/CryptoApi";
import { SearchOutlined } from "@ant-design/icons";

const CryptocurrenciesPage = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, IsFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterdData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(SearchTerm.toLocaleLowerCase())
    );

    setCryptos(filterdData);
  }, [cryptosList, SearchTerm]);

  if (IsFetching) return "Loading...";
  // console.log(cryptos);
  return (
    <>
      {!simplified && (
        <div className="my-10 flex items-center gap-4 px-3 bg-white w-60 rounded">
          <SearchOutlined className="text-lg text-blue-600" />
          <input
            className="w-60 py-2 placeholder:text-xs outline-none rounded"
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container min-h-[65vh]">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card min-w-[250px] w-9"
            key={currency.id}
          >
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img className="crypto-image w-9" src={currency.iconUrl} />
                }
                hoverable
              >
                <p>Price: {Millify(currency.price)}</p>
                <p>Market Cap: {Millify(currency.marketCap)}</p>
                <p>Daily Change: {Millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptocurrenciesPage;
