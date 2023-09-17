import axios from 'axios'
import { getTokenJwt } from 'src/components/helper'

export const GET_PROFILE = 'GET_PROFILE'
export const GET_SALDO = 'GET_SALDO'
export const GET_SERVICE = 'GET_SERVICE'
export const GET_BANNER = 'GET_BANNER'

export const getProfile = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })

    const jwtToken = getTokenJwt()

    axios
      .get(`https://take-home-test-api.nutech-integrasi.app/profile`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_PROFILE,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        console.log('error profile', error)
        dispatch({
          type: GET_PROFILE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}

export const getSaldo = () => {
  return (dispatch) => {
    dispatch({
      type: GET_SALDO,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })

    const jwtToken = getTokenJwt()

    axios
      .get(`https://take-home-test-api.nutech-integrasi.app/balance`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        console.log('dapet saldo', res)
        dispatch({
          type: GET_SALDO,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        console.log('error saldo', error)
        dispatch({
          type: GET_SALDO,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}

export const getService = () => {
  return (dispatch) => {
    dispatch({
      type: GET_SERVICE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })

    const jwtToken = getTokenJwt()

    axios
      .get(`https://take-home-test-api.nutech-integrasi.app/services`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_SERVICE,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_SERVICE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}

export const getBanner = () => {
  return (dispatch) => {
    dispatch({
      type: GET_BANNER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })

    const jwtToken = getTokenJwt()

    axios
      .get(`https://take-home-test-api.nutech-integrasi.app/banner`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        console.log('dapet banner', res)
        dispatch({
          type: GET_BANNER,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        console.log('error banner', error)
        dispatch({
          type: GET_BANNER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}
