import React from 'react'
import { Modal } from 'antd'
import { CButton, CFormInput, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCheck, cilCheckCircle } from '@coreui/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

function ModalSuccess({ openSuccess, setOpenSuccess, text = '', reload = '' }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleCancel = () => {
    setOpenSuccess(false)
  }

  return (
    <Modal
      visible={openSuccess}
      onCancel={handleCancel}
      closable={false}
      footer={[
        <div key={'button-cancel'} className="d-grid gap-2">
          <CButton
            color="primary"
            onClick={() => {
              handleCancel()
              navigate(reload)
            }}
          >
            TUTUP
          </CButton>
        </div>,
      ]}
      width={400}
      zIndex={9999}
    >
      <CRow sm={4}>
        <CCol className="text-center text-success">
          <CIcon size="6xl" icon={cilCheckCircle} />
        </CCol>
      </CRow>
      <CRow sm={8}>
        <CCol className="text-center">
          <h4>BERHASIL</h4>
          <h4>
            <CFormInput value={text} disabled style={{ textAlign: 'center' }} />
          </h4>
        </CCol>
      </CRow>
    </Modal>
  )
}

ModalSuccess.propTypes = {
  openSuccess: PropTypes.bool.isRequired,
  setOpenSuccess: PropTypes.func.isRequired,
  text: PropTypes.string,
  reload: PropTypes.string,
}

export default ModalSuccess
