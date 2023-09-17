import { CHECK_LOGIN } from '../../actions/login/loginAction'

const initialState = {
  addLoginResult: false,
  addLoginLoading: false,
  addLoginError: false,
  addLoginStatus: false,
  addLoginToken: false,
}

const Login = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN:
      return {
        ...state,
        addLoginResult: action.payload.data,
        addLoginLoading: action.payload.loading,
        addLoginError: action.payload.errorMessage,
        addLoginStatus: action.payload.status,
        addLoginToken: action.payload.token,
      }
    default:
      return state
  }
}

export default Login
