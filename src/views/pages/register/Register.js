import React, { useState, useEffect } from 'react'
import { CButton } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Input } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import { Spinner } from 'reactstrap'
import IllustrasiLogin from '../../../assets/Website Assets/Illustrasi Login.png'
import Logo from '../../../assets/Website Assets/Logo.png'
import { addRegister } from 'src/actions/registrasi/registerAction'
import ModalSuccess from 'src/components/Modal/ModalSuccess'
import ModalError from 'src/components/Modal/ModalError'

const initData = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  confrim: '',
}

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const addRegisterError = useSelector((state) => state.RegisterReducer.addRegisterError)
  const addRegisterStatus = useSelector((state) => state.RegisterReducer.addRegisterStatus)

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
    if (dataInput.password !== dataInput.confrim) {
      setButtonloading(false)
      setOnError({
        open: true,
        message: 'Password dan Konfirmasi Password tidak sesuai',
      })
    } else {
      const dataSave = {
        first_name: dataInput.first_name,
        last_name: dataInput.last_name,
        email: dataInput.email,
        password: dataInput.password,
      }

      dispatch(addRegister(dataSave))
    }
  }

  useEffect(() => {
    if (addRegisterStatus === 200 && addRegisterStatus !== false) {
      setButtonloading(false)
      setOnSuccess(true)
    } else if (addRegisterStatus !== 200 && addRegisterError !== false) {
      setButtonloading(false)
      setOnError({
        open: true,
        message: addRegisterError ?? 'Mohon Maaf Ada yang Salah',
      })
    }
  })

  return (
    <>
      <ModalSuccess
        openSuccess={onSuccess}
        setOpenSuccess={setOnSuccess}
        text="Berhasil"
        reload="/login"
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
                <strong>Lengkapi Data Untuk Membuat Akun</strong>
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
              <Input
                key="first_name"
                name="first_name"
                size="large"
                value={dataInput.first_name}
                placeholder="nama depan"
                onChange={handleChange}
                style={{
                  padding: '10px 10px',
                  fontSize: '16px',
                }}
              />
            </Col>
            <Col lg={18} style={{ textAlign: 'center', marginBottom: '15px' }}>
              <Input
                key="last_name"
                name="last_name"
                size="large"
                value={dataInput.last_name}
                placeholder="nama belakang"
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
                placeholder="buat password"
                onChange={handleChange}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                style={{
                  padding: '10px 10px',
                  fontSize: '16px',
                }}
              />
            </Col>
            <Col lg={18} style={{ textAlign: 'center', marginBottom: '15px' }}>
              <Input.Password
                key="confrim"
                name="confrim"
                size="large"
                value={dataInput.confrim}
                placeholder="Konfirmasi password"
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
                {buttonLoading ? (
                  <Spinner color="light" />
                ) : (
                  <CButton color="danger" className="text-white" onClick={handleSave}>
                    Registrasi
                  </CButton>
                )}
              </div>
              <div className="text-center">
                sudah punya akun?login{' '}
                <span
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/login')}
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

export default Register
