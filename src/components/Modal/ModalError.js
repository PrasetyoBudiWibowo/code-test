import React from 'react'
import { Modal } from 'antd'
import { CButton, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilXCircle } from '@coreui/icons'
import PropTypes from 'prop-types'

function ModalError({ openError, setOpenError, error }) {
  const handleCancel = () => {
    setOpenError(false)
  }

  return (
    <Modal
      open={openError}
      onCancel={handleCancel}
      closable={false}
      footer={[
        <div key={'parent'} className="d-grid gap-2">
          <CButton key={'cancel'} color="warning" onClick={handleCancel}>
            TUTUP
          </CButton>
        </div>,
      ]}
      width={400}
      zIndex={9999}
    >
      <CRow className="justify-content-center">
        <CCol sm="10 text-center">
          <h5 className="mb-3">{error}</h5>
        </CCol>
      </CRow>
    </Modal>
  )
}

ModalError.propTypes = {
  openError: PropTypes.string.isRequired,
  setOpenError: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default ModalError
