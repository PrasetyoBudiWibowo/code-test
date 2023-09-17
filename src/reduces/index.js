import { combineReducers } from 'redux'
import RegisterReducer from './register'
import LoginReducer from './login'
import HomeRecuder from './home'
import TransactionRecuder from './transaction'
import AccountRecuder from './account'

export default combineReducers({
  RegisterReducer,
  LoginReducer,
  HomeRecuder,
  TransactionRecuder,
  AccountRecuder,
})
