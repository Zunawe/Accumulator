import { SET_CONTACTS } from '../actions/contact'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }
    default:
      return state
  }
}

export default reducer
