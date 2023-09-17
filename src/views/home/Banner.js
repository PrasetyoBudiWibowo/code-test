import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBanner } from 'src/actions/home/homeAction'
import { Row, Col } from 'antd'

const Banner = () => {
  const dispatch = useDispatch()
  const { getBannerResult } = useSelector((state) => state.HomeRecuder)

  const [dataBanner, setDataBanner] = useState([])

  useEffect(() => {
    dispatch(getBanner())
  }, [dispatch])

  useEffect(() => {
    if (getBannerResult) {
      setDataBanner(getBannerResult.data)
    }
  }, [getBannerResult])

  return (
    <>
      <strong className="mb-5">Temukan promo menarik</strong>
      <Row gutter={16}>
        {dataBanner.map((it, ix) => (
          <Col lang={24} key={ix} className="m-2 text-center">
            <img src={it.banner_image} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Banner
