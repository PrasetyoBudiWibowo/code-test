import { GET_PROFILE, GET_SALDO, GET_SERVICE, GET_BANNER } from '../../actions/home/homeAction'

const initialState = {
  getProfileResult: false,
  getProfileLoading: false,
  getProfileError: false,

  getSaldoResult: false,
  getSaldoLoading: false,
  getSaldoError: false,

  getServiceResult: false,
  getServiceLoading: false,
  getServiceError: false,

  getBannerResult: false,
  getBannerLoading: false,
  getBannerError: false,
}

const Home = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        getProfileResult: action.payload.data,
        getProfileLoading: action.payload.loading,
        getProfileError: action.payload.errorMessage,
      }

    case GET_SALDO:
      return {
        ...state,
        getSaldoResult: action.payload.data,
        getSaldoLoading: action.payload.loading,
        getSaldoError: action.payload.errorMessage,
      }

    case GET_SERVICE:
      return {
        ...state,
        getServiceResult: action.payload.data,
        getServiceLoading: action.payload.loading,
        getServiceError: action.payload.errorMessage,
      }

    case GET_BANNER:
      return {
        ...state,
        getBannerResult: action.payload.data,
        getBannerLoading: action.payload.loading,
        getBannerError: action.payload.errorMessage,
      }
    default:
      return state
  }
}

export default Home
