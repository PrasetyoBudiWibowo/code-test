import {
  ADD_TOP_UP,
  GET_TRANSACTION,
  GET_OPTION_SERVICE,
  ADD_PAYMENT,
} from '../../actions/transaction/transactionAction'

const initialState = {
  addTopUpResult: false,
  addTopUpLoading: false,
  addTopUpError: false,

  getTransactionResult: false,
  getTransactionLoading: false,
  getTransactionError: false,

  getOptionServiceResult: false,
  getOptionServiceLoading: false,
  getOptionServiceError: false,

  addPaymentResult: false,
  addPaymentLoading: false,
  addPaymentError: false,
}

const Transaction = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOP_UP:
      return {
        ...state,
        addTopUpResult: action.payload.data,
        addTopUpLoading: action.payload.loading,
        addTopUpError: action.payload.errorMessage,
      }

    case GET_TRANSACTION:
      return {
        ...state,
        getTransactionResult: action.payload.data,
        getTransactionLoading: action.payload.loading,
        getTransactionError: action.payload.errorMessage,
      }

    case GET_OPTION_SERVICE:
      return {
        ...state,
        getOptionServiceResult: action.payload.data,
        getOptionServiceLoading: action.payload.loading,
        getOptionServiceError: action.payload.errorMessage,
      }

    case ADD_PAYMENT:
      return {
        ...state,
        addPaymentResult: action.payload.data,
        addPaymentLoading: action.payload.loading,
        addPaymentError: action.payload.errorMessage,
      }
    default:
      return state
  }
}

export default Transaction
