import React, { useState, useEffect } from 'react'
import { CButton } from '@coreui/react'
import { Row, Col, Input } from 'antd'
import ModalSuccess from 'src/components/Modal/ModalSuccess'
import ModalError from 'src/components/Modal/ModalError'

const initData = {
  name: '',
  password: '',
}

const Login = () => {
  const [dataInput, setDataInput] = useState(initData)
  const [onSuccess, setOnSuccess] = useState(false)
  const [onError, setOnError] = useState({
    open: false,
    message: '',
  })

  const handleChange = (e) => {
    const key = e.target ? e.target.name : e.name
    const value = e.target ? e.target.value : e.value

    setDataInput((old) => ({ ...old, [key]: value }))
  }

  const handleSave = async () => {
    if (dataInput.name !== 'test' && dataInput.password !== '123') {
      setOnError({
        open: true,
        message: 'Mohon Maaf Ada yang Salah',
      })
    } else {
      setOnSuccess(true)
    }
  }

  return (
    <>
      <ModalSuccess
        openSuccess={onSuccess}
        setOpenSuccess={setOnSuccess}
        text="Berhasil Login"
        reload="/home"
      />
      <ModalError
        openError={onError.open}
        setOpenError={() => setOnError({ open: false, error: '' })}
        error={onError.message}
      />
      <Row>
        <Col span={4}>USERNAME</Col>
        <Col span={12}>
          <Input
            key="name"
            name="name"
            size="large"
            value={dataInput.name}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={4}>PASSWORD</Col>
        <Col span={12}>
          <Input.Password
            key="password"
            name="password"
            size="large"
            value={dataInput.password}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col offset={14} lg={8}>
          <div className=" mt-2">
            <CButton className="text-white" onClick={handleSave}>
              Login
            </CButton>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Login
