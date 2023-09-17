import axios from 'axios'
import { getTokenJwt } from 'src/components/helper'

export const EDIT_PROFILE = 'EDIT_PROFILE'
export const EDIT_IMAGE = 'EDIT_IMAGE'

export const editProfle = (data) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })

    const jwtToken = getTokenJwt()

    axios
      .put(`https://take-home-test-api.nutech-integrasi.app/profile/update`, data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        console.log('berhasil edit', res)
        dispatch({
          type: EDIT_PROFILE,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        console.log('error edit', error)
        dispatch({
          type: EDIT_PROFILE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}

export const editImage = (data) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_IMAGE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })

    const jwtToken = getTokenJwt()

    axios
      .put(`https://take-home-test-api.nutech-integrasi.app/profile/image`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        console.log('berhasil edit image', res)
        dispatch({
          type: EDIT_IMAGE,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        console.log('error image', error)
        dispatch({
          type: EDIT_IMAGE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}
