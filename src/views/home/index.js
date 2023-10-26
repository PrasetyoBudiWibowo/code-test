import React, { useEffect, useState } from 'react'
import { Row, Col, Table } from 'antd'
import axios from 'axios'
import ModalDetail from './ModalDetail'

function Index() {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState([])
  const [loading, setLoading] = useState(false)
  const [openDetail, setOpenDetail] = useState(false)
  const [dataDetail, setDataDetail] = useState({})

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://universities.hipolabs.com/search?country=Indonesia')
      const dataRes = response.data
      setData(dataRes)
      setLoading(false)
    } catch (err) {
      console.error('Failed to fetch data:', err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const colums = [
    {
      title: 'No',
      render: (c, r, i) => i + 1,
    },
    {
      title: 'Nama Universitas',
      render: (c, r, i) => {
        return (
          <>
            <div
              onClick={() => {
                setOpenDetail(true)
                setDataDetail(r)
              }}
            >
              {r.name}
            </div>
          </>
        )
      },
    },
    {
      title: 'Website',
      render: (c, r, i) => {
        return (
          <>
            <div>{r.web_pages[0]}</div>
          </>
        )
      },
    },
  ]

  return (
    <>
      <ModalDetail openDetail={openDetail} setOpenDetail={setOpenDetail} dataDetail={dataDetail} />

      <Row>
        <Col lg={12}>WELCOME TEST</Col>
      </Row>
      <Row>
        <Col lg={12}>
          {data.map((it, ix) => (
            <>
              <ul key={ix}>
                <li
                  onClick={() => {
                    setOpenDetail(true)
                    setDataDetail(it)
                  }}
                >
                  Nama Universitas: {it.name}
                </li>
                <li>Webiste: {it.web_pages[0]}</li>
              </ul>
            </>
          ))}
          {/* <Table
            bordered
            columns={colums}
            loading={loading}
            size="large"
            dataSource={data ?? []}
            onChange={(e) =>
              setPagination({
                ...pagination,
                page: e.current,
                pageSize: e.pageSize,
              })
            }
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: [5, 10, 20, 50, 100, 500, 1000],
            }}
          /> */}
        </Col>
      </Row>
    </>
  )
}

export default Index
