import { EDIT_PROFILE, EDIT_IMAGE } from '../../actions/account/accountAction'

const initialState = {
  editProfileResult: false,
  editProfileLoading: false,
  editProfileError: false,

  editImageResult: false,
  editImageLoading: false,
  editImageError: false,
}

const Account = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        editProfileResult: action.payload.data,
        editProfileLoading: action.payload.loading,
        editProfileError: action.payload.errorMessage,
      }

    case EDIT_IMAGE:
      return {
        ...state,
        editImageResult: action.payload.data,
        editImageLoading: action.payload.loading,
        editImageError: action.payload.errorMessage,
      }
    default:
      return state
  }
}

export default Account
