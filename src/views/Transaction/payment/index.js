import React from 'react'
import { Row, Col } from 'antd'
import Profile from 'src/views/home/Profile'
import Saldo from 'src/views/home/Saldo'
import Payment from './payment'

const index = () => {
  return (
    <>
      <Row gutter={16} className="mt-3">
        <Col lg={12}>
          <Profile />
        </Col>
        <Col lg={12} className="mr-1">
          <Saldo />
        </Col>
      </Row>
      <Payment />
    </>
  )
}

export default index
