import axios from 'axios'

export const CHECK_LOGIN = 'CHECK_LOGIN'

export const addLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: CHECK_LOGIN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
        status: false,
        token: false,
      },
    })

    axios
      .post('https://take-home-test-api.nutech-integrasi.app/login', data)
      .then((res) => {
        const userData = {
          email: data.email,
        }

        localStorage.setItem('Bearer Token', JSON.stringify(userData))

        const jwtToken = res.data.data.token

        localStorage.setItem('jwtToken', jwtToken)

        const expirationTime = new Date().getTime() + 12 * 60 * 60 * 1000
        localStorage.setItem('jwtTokenExpiration', expirationTime)

        const jwt = `Bearer ${jwtToken}`

        dispatch({
          type: CHECK_LOGIN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
            status: res.status,
            token: jwtToken,
          },
        })
      })
      .catch((error) => {
        dispatch({
          type: CHECK_LOGIN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
            status: error.response.status,
            token: false,
          },
        })
      })
  }
}
