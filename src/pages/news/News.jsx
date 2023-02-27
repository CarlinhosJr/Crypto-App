import React, { useState } from "react";
import { Select, Row, Col, Avatar, Card } from "antd";
import { useGetCryptoNewsQuery } from "../../redux/CryptoNewsApi";
import moment from "moment/moment";
import { useGetCryptosQuery } from "../../redux/CryptoApi";
import Loader from "../../components/Loader";

const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 18,
  });

  console.log(cryptoNews);

  if (!cryptoNews?.value) return <Loader/>
 
  return (
    <Row gutter={[24, 24]} className="mt-6">
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="w-48"
            placeholder="Select a Crypto"
            onChange={(value) => setNewsCategory(value)}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, id) => (
        <Col xs={24} sm={12} lg={8} key={id}>
          <Card hoverable className="news-card min-h-[300px]">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container flex justify-between">
                <h1 className="news-title w-[70%] text-lg font-bold">
                  {news.name}
                </h1>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <p className="mt-3">{news.description}</p>
              <div className="provider-container flex justify-between items-center mt-5">
                <div>
                  <Avatar
                    src={news.provider[0]?.image?.thumbnail?.contentUrl}
                  />
                  <span className="provider-name ml-3">
                    {news.provider[0]?.name}
                  </span>
                </div>
                <span>
                  {moment(news.datePublished).startOf("second").fromNow()}
                </span>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;



