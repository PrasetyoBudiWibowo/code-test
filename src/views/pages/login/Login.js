import React, { useState, useEffect } from 'react'
import { CButton } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Input } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import { Spinner } from 'reactstrap'
import IllustrasiLogin from '../../../assets/Website Assets/Illustrasi Login.png'
import Logo from '../../../assets/Website Assets/Logo.png'
import { addLogin } from 'src/actions/login/loginAction'
import ModalSuccess from 'src/components/Modal/ModalSuccess'
import ModalError from 'src/components/Modal/ModalError'

const initData = {
  email: '',
  password: '',
}

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const addloginError = useSelector((state) => state.LoginReducer.addLoginError)
  const addLoginStatus = useSelector((state) => state.LoginReducer.addLoginStatus)
  const addLoginToken = useSelector((state) => state.LoginReducer.addLoginToken)

  const [dataInput, setDataInput] = useState(initData)
  const [onSuccess, setOnSuccess] = useState(false)
  const [buttonLoading, setButtonloading] = useState(false)
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
    setButtonloading(true)
    const dataSave = {
      email: dataInput.email,
      password: dataInput.password,
    }

    dispatch(addLogin(dataSave))
  }

  useEffect(() => {
    if (addLoginStatus === 200 && addLoginStatus !== false) {
      setButtonloading(false)
      setOnSuccess(true)
    } else if (addLoginStatus !== 200 && addLoginStatus !== false) {
      setButtonloading(false)
      setOnError({
        open: true,
        message: addloginError ?? 'Mohon Maaf Ada yang Salah',
      })
    }
  }, [addLoginStatus, addloginError])

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

      <Row gutter={16}>
        <Col lg={12}>
          <Row gutter={16} align="middle" justify="center">
            <Col lg={14} style={{ textAlign: 'center' }}>
              <img src={Logo} style={{ marginBottom: '10px', marginRight: '5px' }} />
              <strong style={{ fontSize: '24px' }}>SIMS PPOB</strong>
              <h3>
                <strong>Masuk atau buat akun untuk memulai</strong>
              </h3>
            </Col>
          </Row>
          <Row gutter={16} justify="center">
            <Col lg={18} style={{ textAlign: 'center', marginBottom: '15px' }}>
              <Input
                key="email"
                name="email"
                size="large"
                value={dataInput.email}
                placeholder="@ masukan email anda"
                onChange={handleChange}
                style={{
                  padding: '10px 10px',
                  fontSize: '16px',
                }}
              />
            </Col>
            <Col lg={18} style={{ textAlign: 'center', marginBottom: '15px' }}>
              <Input.Password
                key="password"
                name="password"
                size="large"
                value={dataInput.password}
                placeholder="masukan password anda"
                onChange={handleChange}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{
                  padding: '10px 10px',
                  fontSize: '16px',
                }}
              />
            </Col>
          </Row>
          <Row gutter={16} justify="center">
            <Col lg={18}>
              <div className="d-grid mb-2">
                <CButton color="danger" className="text-white" onClick={handleSave}>
                  {buttonLoading ? (
                    <>
                      <Spinner /> Mohon Tunggu
                    </>
                  ) : (
                    <>
                      <div>Masuk</div>
                    </>
                  )}
                </CButton>
              </div>
              <div className="text-center">
                belum punya akun? registrasi{' '}
                <span
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/register')}
                >
                  di sini
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={12}>
          <img src={IllustrasiLogin} />
        </Col>
      </Row>
    </>
  )
}

export default Login
