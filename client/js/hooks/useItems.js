import { useContext } from 'react'

import { ItemsContext } from '../context/items'

const useItems = () => {
  return useContext(ItemsContext)
}

export default useItems
