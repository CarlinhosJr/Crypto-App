import React, { useState } from "react";
import Millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../redux/CryptoApi";

const CryptocurrenciesPage = ({simplified}) => {
  const count = simplified ? 10 : 100
  const { data: cryptosList, IsFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  // console.log(cryptos);
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container min-h-[65vh]">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card min-w-[250px] w-9" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image w-9" src={currency.iconUrl} />}
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
