import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileFoto from '../../assets/Website Assets/Profile Photo.png'
import { getProfile } from 'src/actions/home/homeAction'

const Profile = () => {
  const dispatch = useDispatch()
  const { getProfileResult } = useSelector((state) => state.HomeRecuder)

  const [data, setData] = useState({})

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  useEffect(() => {
    if (getProfileResult) {
      setData(getProfileResult.data)
    }
  }, [getProfileResult])

  return (
    <>
      <img src={ProfileFoto} style={{ marginBottom: '10px', marginRight: '5px' }} />
      <br />
      Semalat datang,
      <h3>
        <strong>
          {data.first_name} {data.last_name}
        </strong>
      </h3>
    </>
  )
}

export default Profile
