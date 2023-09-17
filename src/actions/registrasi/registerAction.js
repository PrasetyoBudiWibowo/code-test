import axios from 'axios'

export const ADD_REGISTER = 'ADD_REGISTER'

export const addRegister = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_REGISTER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
        status: false,
      },
    })

    axios
      .post(`https://take-home-test-api.nutech-integrasi.app/registration`, data)
      .then((res) => {
        dispatch({
          type: ADD_REGISTER,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
            status: res.status,
          },
        })
      })
      .catch((error) => {
        dispatch({
          type: ADD_REGISTER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
            status: error.response.status,
          },
        })
      })
  }
}
