import React, { useState, useEffect } from 'react'
import { CCard, CCardTitle, CCardImage, CCardImageOverlay, CCardText } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getSaldo } from 'src/actions/home/homeAction'
import BackGroundSaldo from '../../assets/Website Assets/Background Saldo.png'
import { formatNumber } from 'src/components/helper'

const Saldo = () => {
  const dispatch = useDispatch()
  const { getSaldoResult } = useSelector((state) => state.HomeRecuder)

  const [dataSaldo, setDataSaldo] = useState({})
  const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(getSaldo())
  }, [dispatch])

  useEffect(() => {
    if (getSaldoResult) {
      setDataSaldo(getSaldoResult.data)
    }
  }, [getSaldoResult])

  return (
    <>
      <CCard className="mb-3 text-white bg-danger">
        <CCardImage src={BackGroundSaldo} />
        <CCardImageOverlay>
          <CCardTitle>Saldo anda</CCardTitle>
          <CCardText>
            <h3>
              Rp.{' '}
              {show ? (
                formatNumber(dataSaldo.balance)
              ) : (
                <strong style={{ fontSize: '30px' }}>......</strong>
              )}
            </h3>
          </CCardText>
          <CCardText
            className="mt-0"
            onClick={() => {
              setShow(!show)
            }}
            style={{ cursor: 'pointer' }}
          >
            {show ? 'tutup saldo' : 'lihat saldo'}
          </CCardText>
        </CCardImageOverlay>
      </CCard>
    </>
  )
}

export default Saldo
