import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import NumberInput from 'src/components/NumberInput'
import { CButton, CCard, CCardBody } from '@coreui/react'
import { Spinner } from 'reactstrap'
import { getOptionService, addPayment } from 'src/actions/transaction/transactionAction'
import { useDispatch, useSelector } from 'react-redux'
import CustomSelect from 'src/components/CustomSelect'
import ModalSuccess from 'src/components/Modal/ModalSuccess'
import ModalError from 'src/components/Modal/ModalError'

const initData = {
  transaction_type: 'PAYMENT',
  service_code: '',
  service_name: '',
  total_amount: 0,
}

const Payment = () => {
  const dispatch = useDispatch()
  const { getOptionServiceResult, addPaymentResult, addPaymentError } = useSelector(
    (state) => state.TransactionRecuder,
  )

  const [dataInput, setDataInput] = useState(initData)
  const [optionService, setOptionService] = useState([])
  const [onSuccess, setOnSuccess] = useState(false)
  const [buttonLoading, setButtonloading] = useState(false)
  const [onError, setOnError] = useState({
    open: false,
    message: '',
  })

  useEffect(() => {
    dispatch(getOptionService())
  }, [dispatch])

  useEffect(() => {
    if (getOptionServiceResult) {
      let arr = []
      let data = getOptionServiceResult.data

      for (let a of data) {
        arr.push({
          name: 'service_list',
          value: a.service_code,
          label: a.service_name,
          service: a.service_name,
        })
      }
      setOptionService(arr)
    }
  }, [getOptionServiceResult])

  useEffect(() => {
    if (addPaymentResult) {
      setButtonloading(false)
      setDataInput(initData)
      setOnSuccess(true)
    } else if (addPaymentError !== false) {
      setButtonloading(false)
      setOnError({
        open: true,
        message: addPaymentError ?? 'Mohon Maaf Ada yang Salah',
      })
    }
  }, [addPaymentResult, dispatch])

  const handleChange = (e) => {
    const key = e.target ? e.target.name : e.name
    const value = e.target ? e.target.value : e.value
    const target = e.target ? e.target : e

    if (key === 'service_list') {
      setDataInput((old) => ({
        ...old,
        service_code: value,
        service_name: target.service,
      }))
    } else {
      setDataInput((old) => ({ ...old, [key]: value }))
    }
  }

  const handleSave = async () => {
    const dataSave = {
      ...dataInput,
    }

    dispatch(addPayment(dataSave))
  }

  return (
    <>
      <Row gutter={16} className="mt-2">
        <Col lg={24}>
          <span>Silakan Masukan</span>
          <h3>Nominal Topup</h3>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={10}>Pembayaran</Col>
      </Row>
      <Row gutter={16}>
        <Col lg={10}>
          <CustomSelect
            options={optionService}
            value={optionService.find((a) => a.value === dataInput.service_code)}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row gutter={16} className="mt-4">
        <Col lg={24}>
          <Row gutter={16} className="mb-2">
            <Col lg={24}>
              <NumberInput
                name="total_amount"
                value={dataInput.total_amount}
                allowNegative={false}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col lg={24}>
              <div className="d-grid mb-2">
                <CButton color="danger" className="text-white" onClick={handleSave}>
                  {buttonLoading ? (
                    <>
                      <Spinner /> Mohon tunggu
                    </>
                  ) : (
                    <>Bayar</>
                  )}
                </CButton>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Payment
