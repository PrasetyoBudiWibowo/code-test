import axios from 'axios'
import { getTokenJwt } from 'src/components/helper'

export const ADD_TOP_UP = 'ADD_TOP_UP'
export const GET_TRANSACTION = 'GET_TRANSACTION'
export const GET_OPTION_SERVICE = 'GET_OPTION_SERVICE'
export const ADD_PAYMENT = 'ADD_PAYMENT'

export const addTopUp = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TOP_UP,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })

    const jwtToken = getTokenJwt()

    axios
      .post(`https://take-home-test-api.nutech-integrasi.app/topup`, data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        dispatch({
          type: ADD_TOP_UP,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        console.log('error top up', error)
        dispatch({
          type: ADD_TOP_UP,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}

export const getTransaction = (data = 0) => {
  return (dispatch) => {
    dispatch({
      type: GET_TRANSACTION,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })

    const jwtToken = getTokenJwt()

    axios
      .get(
        `https://take-home-test-api.nutech-integrasi.app/transaction/history?offset=${data}&limit=3`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        },
      )
      .then((res) => {
        dispatch({
          type: GET_TRANSACTION,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        console.log('error report', error)
        dispatch({
          type: GET_TRANSACTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}

export const getOptionService = () => {
  return (dispatch) => {
    dispatch({
      type: GET_OPTION_SERVICE,
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
          type: GET_OPTION_SERVICE,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        console.log('error option service', error)
        dispatch({
          type: GET_OPTION_SERVICE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}

export const addPayment = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PAYMENT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    })

    const jwtToken = getTokenJwt()

    axios
      .post(`https://take-home-test-api.nutech-integrasi.app/transaction`, data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        dispatch({
          type: ADD_PAYMENT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        })
      })
      .catch((error) => {
        console.log('error bayar', error)
        dispatch({
          type: ADD_PAYMENT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        })
      })
  }
}
