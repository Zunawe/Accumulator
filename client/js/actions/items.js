import axios from 'axios'

export const SET_ITEMS = 'SET_ITEMS'
export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: items
})

export const addItem = (collectionId, item) => {
  return (dispatch) => {
    axios.post(`http://localhost:8000/api/collection/${collectionId}/item`, item)
  }
}

export const getItems = (collectionId) => {
  return (dispatch) => {
    axios.get(`http://localhost:8000/api/collection/${collectionId}/item`)
      .then((result) => {
        dispatch(setItems(result.data))
      })
  }
}

export const updateItem = (collectionId, itemId, payload) => {
  return (dispatch) => {
    axios.put(`http://localhost:8000/api/collection/${collectionId}/item/${itemId}`, payload)
  }
}

export const deleteItem = (collectionId, itemId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:8000/api/collection/${collectionId}/item/${itemId}`)
  }
}
