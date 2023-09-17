import { ADD_REGISTER } from '../../actions/registrasi/registerAction'

const initialState = {
  addRegisterResult: false,
  addRegisterLoading: false,
  addRegisterError: false,
  addRegisterStatus: false,
}

const Register = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REGISTER:
      return {
        ...state,
        addRegisterResult: action.payload.data,
        addRegisterLoading: action.payload.loading,
        addRegisterError: action.payload.errorMessage,
        addRegisterStatus: action.payload.status,
      }
    default:
      return state
  }
}

export default Register
