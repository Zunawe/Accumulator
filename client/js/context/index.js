import React from 'react'

import { ItemsContextProvider } from './items'
import { CollectionsContextProvider } from './collections'

const ContextProvider = ({ children }) => {
  return (
    <CollectionsContextProvider>
      <ItemsContextProvider>
        {children}
      </ItemsContextProvider>
    </CollectionsContextProvider>
  )
}

export default ContextProvider
