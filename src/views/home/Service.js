import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getService } from 'src/actions/home/homeAction'
import { Row, Col } from 'antd'

function Service() {
  const dispatch = useDispatch()
  const { getServiceResult } = useSelector((state) => state.HomeRecuder)

  const [dataService, setDataService] = useState([])

  useEffect(() => {
    dispatch(getService())
  }, [dispatch])

  useEffect(() => {
    if (getServiceResult) {
      setDataService(getServiceResult.data)
    }
  }, [getServiceResult])

  return (
    <>
      <Row gutter={16}>
        {dataService.map((it, ix) => (
          <Col lang={24} key={ix} className="m-2 text-center">
            <img src={it.service_icon} />
            <br />
            <span>{it.service_name}</span>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Service
