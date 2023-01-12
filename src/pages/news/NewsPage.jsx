import React from 'react'
import { Select, Row, Col, Avatar, Card } from 'antd'
import { useGetCryptoNewsQuery } from '../../redux/CryptoNewsApi'


const {Option} = Select
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const NewsPage = ({simplified}) => {
  
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 })

  console.log(cryptoNews)

  if(!cryptoNews?.value) return 'Loading...'

  return (
    <Row gutter={[24,24]}>
      {cryptoNews.value.map((news, id) => {
        <Col xs={24} sm={12} lg={8} key={id}>
          <Card hoverable className='news-card'>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
               <h1 className='news-title'>{news.name}</h1>
               <img src={news?.image?.thumnail?.contentUrl || demoImage} alt="" />
              </div>
            </a>
          </Card>
        </Col>
      })}
    </Row>
  )
}

export default NewsPage