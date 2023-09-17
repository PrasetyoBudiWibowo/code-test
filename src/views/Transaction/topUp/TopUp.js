import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import NumberInput from 'src/components/NumberInput'
import { CButton, CCard, CCardBody } from '@coreui/react'
import { addTopUp } from 'src/actions/transaction/transactionAction'
import { Spinner } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import ModalSuccess from 'src/components/Modal/ModalSuccess'
import ModalError from 'src/components/Modal/ModalError'

const initData = {
  top_up_amount: 0,
  transaction_type: 'TOPUP',
}

const TopUp = () => {
  const styleCard = { cursor: 'pointer' }
  const dispatch = useDispatch()
  const { addTopUpResult, addTopUpError } = useSelector((state) => state.TransactionRecuder)

  const [dataInput, setDataInput] = useState(initData)
  const [onSuccess, setOnSuccess] = useState(false)
  const [buttonLoading, setButtonloading] = useState(false)
  const [onError, setOnError] = useState({
    open: false,
    message: '',
  })

  useEffect(() => {
    if (addTopUpResult) {
      setButtonloading(false)
      setDataInput(initData)
      setOnSuccess(true)
    } else if (addTopUpError !== false) {
      setButtonloading(false)
      setOnError({
        open: true,
        message: addTopUpError ?? 'Mohon Maaf Ada yang Salah',
      })
    }
  }, [addTopUpResult, dispatch])

  const handleChange = (e) => {
    const key = e.target ? e.target.name : e.name
    const value = e.target ? e.target.value : e.value

    setDataInput((old) => ({ ...old, [key]: value }))
  }

  const handleCardClick = (e) => {
    if (e === 'one') {
      setDataInput((old) => ({
        ...old,
        top_up_amount: 10000,
      }))
    } else if (e === 'two') {
      setDataInput((old) => ({
        ...old,
        top_up_amount: 20000,
      }))
    } else if (e === 'three') {
      setDataInput((old) => ({
        ...old,
        top_up_amount: 50000,
      }))
    } else if (e === 'four') {
      setDataInput((old) => ({
        ...old,
        top_up_amount: 100000,
      }))
    } else if (e === 'five') {
      setDataInput((old) => ({
        ...old,
        top_up_amount: 250000,
      }))
    } else if (e === 'six') {
      setDataInput((old) => ({
        ...old,
        top_up_amount: 500000,
      }))
    }
  }

  const handleSave = async () => {
    setButtonloading(true)
    const dataSave = {
      ...dataInput,
    }

    dispatch(addTopUp(dataSave))
  }

  return (
    <>
      <ModalSuccess
        openSuccess={onSuccess}
        setOpenSuccess={setOnSuccess}
        text="Berhasil Top Up"
        reload="/top-up"
      />

      <ModalError
        openError={onError.open}
        setOpenError={() => setOnError({ open: false, error: '' })}
        error={onError.message}
      />

      <Row gutter={16} className="mt-2">
        <Col lg={24}>
          <span>Silakan Masukan</span>
          <h3>Nominal Topup</h3>
        </Col>
      </Row>
      <Row gutter={16} className="mt-4">
        <Col lg={16}>
          <Row gutter={16} className="mb-2">
            <Col lg={24}>
              <NumberInput
                name="top_up_amount"
                value={dataInput.top_up_amount}
                allowNegative={false}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={24}>
              <div className="d-grid mb-2">
                <CButton
                  color="danger"
                  className="text-white"
                  onClick={handleSave}
                  disabled={
                    dataInput.top_up_amount < 10000
                      ? true
                      : dataInput.top_up_amount >= 10000
                      ? false
                      : true
                  }
                >
                  {buttonLoading ? (
                    <>
                      <Spinner /> Mohon tunggu
                    </>
                  ) : (
                    <>Top Up</>
                  )}
                </CButton>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={8}>
          <Row gutter={16} className="mb-2">
            <Col lg={8}>
              <CCard
                onClick={() => {
                  handleCardClick('one')
                }}
                style={styleCard}
              >
                <CCardBody>Rp. 10.000</CCardBody>
              </CCard>
            </Col>
            <Col lg={8}>
              <CCard
                onClick={() => {
                  handleCardClick('two')
                }}
                style={styleCard}
              >
                <CCardBody>Rp. 20.000</CCardBody>
              </CCard>
            </Col>
            <Col lg={8}>
              <CCard
                onClick={() => {
                  handleCardClick('three')
                }}
                style={styleCard}
              >
                <CCardBody>Rp. 50.000</CCardBody>
              </CCard>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={8}>
              <CCard
                onClick={() => {
                  handleCardClick('four')
                }}
                style={styleCard}
              >
                <CCardBody>Rp. 100.000</CCardBody>
              </CCard>
            </Col>
            <Col lg={8}>
              <CCard
                onClick={() => {
                  handleCardClick('five')
                }}
                style={styleCard}
              >
                <CCardBody>Rp. 250.000</CCardBody>
              </CCard>
            </Col>
            <Col lg={8}>
              <CCard
                onClick={() => {
                  handleCardClick('six')
                }}
                style={styleCard}
              >
                <CCardBody>Rp. 500.000</CCardBody>
              </CCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default TopUp
