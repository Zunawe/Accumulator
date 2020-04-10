import React, { createContext, useReducer } from 'react'

import reducer from '../reducers/items'

const initialState = {
  collections: []
}

export const CollectionsContext = createContext()

export const CollectionsContextProvider = (props) => {
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
    <CollectionsContext.Provider value={[state, combinedDispatch]}>
      {children}
    </CollectionsContext.Provider>
  )
}
