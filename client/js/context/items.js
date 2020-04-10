import React, { createContext, useReducer } from 'react'

import reducer from '../reducers/items'

const initialState = {
  items: []
}

export const ItemsContext = createContext()

export const ItemsContextProvider = (props) => {
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
    <ItemsContext.Provider value={[state, combinedDispatch]}>
      {children}
    </ItemsContext.Provider>
  )
}
