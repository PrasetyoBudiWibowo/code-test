import React from 'react'
import { Row, Col } from 'antd'
import Profile from './Profile'
import Saldo from './Saldo'
import Service from './Service'
import Banner from './Banner'

function index() {
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
      <Row gutter={16} className="mt-2">
        <Col lg={24}>
          <Service />
        </Col>
      </Row>
      <Row gutter={16} className="mt-4">
        <Col lg={24}>
          <Banner />
        </Col>
      </Row>
    </>
  )
}

export default index
