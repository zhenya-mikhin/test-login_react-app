import { AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL } from './actionTypes'

const reducer = (state = false, action) => {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return { login: action.payload }

    case AUTHORIZATION_FAIL:
      return { errorMessage: action.payload }

    default:
      return state
  }
}

export default reducer
