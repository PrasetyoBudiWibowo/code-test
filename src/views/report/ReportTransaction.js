import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import { CCard, CCardBody } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransaction } from 'src/actions/transaction/transactionAction'
import moment from 'moment'
import 'moment/locale/id'
import { formatNumber } from 'src/components/helper'

const ReportTransaction = () => {
  const dispatch = useDispatch()
  const { getTransactionResult } = useSelector((state) => state.TransactionRecuder)

  const [dataTransaction, setDataTransaction] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    dispatch(getTransaction(offset))
  }, [dispatch, offset])

  useEffect(() => {
    if (getTransactionResult) {
      setDataTransaction((prevData) => [...prevData, ...getTransactionResult.data.records])
    }
  }, [getTransactionResult])

  const handleShowMore = () => {
    const newOffset = offset + 3
    setOffset(newOffset)
  }

  return (
    <>
      <Row gutter={16} className="mt-2">
        <Col lg={24}>
          <strong>Semua Transaksi</strong>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={24} className="m-2">
          {dataTransaction.map((it, ix) => (
            <CCard key={ix} className="mt-2">
              <CCardBody>
                <Row gutter={16}>
                  <Col lg={20}>
                    <strong
                      style={{
                        color: it.transaction_type === 'TOPUP' ? 'green' : 'red',
                        fontSize: '18px',
                      }}
                    >
                      {it.transaction_type === 'TOPUP' ? '+' : '-'} Rp.{' '}
                      {formatNumber(it.total_amount)}
                    </strong>
                  </Col>
                  <Col lg={4}>{it.description}</Col>
                </Row>
                <Row gutter={8}>
                  <Col lg={18}>{moment(it.created_on).format('HH MMMM YYYY HH:mm')} WIB</Col>
                </Row>
              </CCardBody>
            </CCard>
          ))}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={24} className="text-center">
          <span
            style={{
              color: 'red',
              cursor: 'pointer',
            }}
            onClick={handleShowMore}
          >
            Show more
          </span>
        </Col>
      </Row>
    </>
  )
}

export default ReportTransaction
