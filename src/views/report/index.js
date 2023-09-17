import React from 'react'
import { Row, Col } from 'antd'
import Profile from '../home/Profile'
import Saldo from '../home/Saldo'
import ReportTransaction from './ReportTransaction'

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
      <Row gutter={16}>
        <Col lg={24}>
          <ReportTransaction />
        </Col>
      </Row>
    </>
  )
}

export default index
