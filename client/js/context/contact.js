import React, { createContext, useReducer } from 'react'

import reducer from '../reducers/contact'

const initialState = {
  contacts: []
}

export const ContactContext = createContext()

export const ContactContextProvider = (props) => {
  const { children } = props

  const [state, dispatch] = useReducer(reducer, initialState)
  const combinedDispatch = (action) => {
    if (typeof action === 'function') {
      action(combinedDispatch)
    } else {
      dispatch(action)
    }
  }

  return (
    <ContactContext.Provider value={[state, combinedDispatch]}>
      {children}
    </ContactContext.Provider>
  )
}
