import { AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL, SIGN_OUT } from './actionTypes'

const reducer = (state = false, action) => {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return { login: action.payload }

    case SIGN_OUT:
    case AUTHORIZATION_FAIL:
      return { errorMessage: action.payload }

    default:
      return state
  }
}

export default reducer
