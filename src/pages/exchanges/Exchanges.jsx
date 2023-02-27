import React from 'react'
import millify from 'millify'
import { Collapse, Row, Col, Avatar } from 'antd'
import { useGetExchangesQuery } from '../../redux/CryptoExchangesApi'
import Loader from '../../components/Loader'

const Exchanges = () => {
  const {data, isFetching} = useGetExchangesQuery()
  const exchangesList = data?.data?.(139)
  console.log(exchangesList)

  if(isFetching) return <Loader/>
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row></Row>
    </>
  )
}

export default Exchanges