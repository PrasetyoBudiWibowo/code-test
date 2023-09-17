import React, { useState, useEffect } from 'react'
import { Row, Col, Input, Upload, Image } from 'antd'
import { CButton } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileFoto from '../../assets/Website Assets/Profile Photo.png'
import { getProfile } from 'src/actions/home/homeAction'
import { editProfle, editImage } from 'src/actions/account/accountAction'
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'
import ModalError from 'src/components/Modal/ModalError'

const Index = () => {
  const dispatch = useDispatch()
  const { getProfileResult } = useSelector((state) => state.HomeRecuder)

  const [dataProfile, setDataProfile] = useState([])
  const [buttonEdit, setButtonEdit] = useState(false)
  const [fileList, setFileList] = useState([])
  const [onError, setOnError] = useState({
    open: false,
    message: '',
  })

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  useEffect(() => {
    if (getProfileResult) {
      setDataProfile(getProfileResult.data)
    }
  }, [getProfileResult])

  const handleChange = (e) => {
    const key = e.target ? e.target.name : e.name
    const value = e.target ? e.target.value : e.value

    setDataProfile((old) => ({ ...old, [key]: value }))
  }

  const handleFileChange = (file) => {
    setFileList(file.fileList)
  }

  const handleEditImage = async () => {
    const maxSize = 100 * 1024
    const file = fileList[0]?.originFileObj

    if (file.size > maxSize) {
      setOnError({
        open: true,
        message: 'Ukuran gambar terlalu besar',
      })
    } else {
      const formData = new FormData()
      formData.append('file', file)

      const dataEdit = {
        file: fileList[0]?.name,
      }

      dispatch(editImage(dataEdit))
    }
  }

  const handlEdit = async () => {
    const dataEdit = {
      ...dataProfile,
    }

    dispatch(editProfle(dataEdit))
  }

  return (
    <>
      <Row gutter={16} className="mt-2">
        <Col lg={24} className="text-center">
          {fileList.length > 0 ? (
            <Image
              preview={false}
              src={URL.createObjectURL(fileList[0]?.originFileObj)}
              style={{
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}
            />
          ) : (
            <img
              src={ProfileFoto}
              width="100px"
              height="100px"
              style={{ marginBottom: '10px', marginRight: '5px' }}
            />
          )}
          <Upload fileList={fileList} onChange={handleFileChange} multiple={true} accept="image/*">
            <CButton
              onClick={handleEditImage}
              disabled={fileList.length > 0 ? 'true' : false}
              style={{
                marginBottom: '10px',
              }}
            >
              <CIcon icon={cilPencil} />
            </CButton>
          </Upload>
        </Col>
      </Row>
      <Row gutter={16} className="mt-2">
        <Col lg={8}>Email</Col>
        <Col lg={24} className="mt-2">
          <Input size="large" name="email" value={dataProfile.email} onChange={handleChange} />
        </Col>
        <Col lg={8}>Nama Depan</Col>
        <Col lg={24} className="mt-2">
          <Input
            size="large"
            name="first_name"
            value={dataProfile.first_name}
            onChange={handleChange}
          />
        </Col>
        <Col lg={8}>Nama Belakang</Col>
        <Col lg={24} className="mt-2">
          <Input
            size="large"
            name="last_name"
            value={dataProfile.last_name}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row gutter={16} className="mt-2">
        {buttonEdit ? (
          <>
            <Col lg={24}>
              <div className="d-grid mb-2">
                <CButton
                  color="danger"
                  className="text-red"
                  variant="outline"
                  onClick={() => setButtonEdit(false)}
                >
                  Batalkan
                </CButton>
              </div>
            </Col>
            <Col lg={24}>
              <div className="d-grid mb-2">
                <CButton color="danger" className="text-white" onClick={handlEdit}>
                  Simpan
                </CButton>
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col lg={24}>
              <div className="d-grid mb-2">
                <CButton
                  color="danger"
                  className="text-red"
                  variant="outline"
                  onClick={() => setButtonEdit(true)}
                >
                  Edit Profile
                </CButton>
              </div>
            </Col>
            <Col lg={24}>
              <div className="d-grid mb-2">
                <CButton color="danger" className="text-white">
                  Logout
                </CButton>
              </div>
            </Col>
          </>
        )}
      </Row>
    </>
  )
}

export default Index
