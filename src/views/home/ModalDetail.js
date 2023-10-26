import React from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import { CButton } from '@coreui/react'

function ModalDetail({ openDetail, setOpenDetail, dataDetail }) {
  const handleCancel = () => {
    setOpenDetail(false)
  }

  return (
    <Modal
      open={openDetail}
      onCancel={handleCancel}
      closable={false}
      width={600}
      zIndex={9999}
      footer={[
        <CButton
          key={'button-cancel'}
          className="m-1"
          color="danger"
          variant="outline"
          onClick={handleCancel}
        >
          Tutup
        </CButton>,
      ]}
    >
      <ul>
        <li>
          Nama Universitas:{'  '} {dataDetail.name}
        </li>
        <li>
          Negara:{'  '} {dataDetail.country}
        </li>
        <li>
          domains:{'  '} {dataDetail?.domains?.[0]}
        </li>
        <li>
          Website:{'  '} {dataDetail?.web_pages?.[0]}
        </li>
      </ul>
    </Modal>
  )
}

ModalDetail.propTypes = {
  openDetail: PropTypes.bool.isRequired,
  setOpenDetail: PropTypes.func.isRequired,
  dataDetail: PropTypes,
}

export default ModalDetail
