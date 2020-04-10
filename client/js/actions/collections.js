import axios from 'axios'

export const SET_COLLECTIONS = 'SET_COLLECTIONS'
export const setCollections = (collections) => ({
  type: SET_COLLECTIONS,
  payload: collections
})

export const addCollection = (collection) => {
  return (dispatch) => {
    axios.post('http://localhost:8000/api/collection', collection)
  }
}

export const getCollection = (collectionId) => {
  return (dispatch) => {
    axios.get(`http://localhost:8000/api/collection/${collectionId}`)
      .then((result) => {
        console.log(result)
      })
  }
}

export const getCollections = (collectionId) => {
  return (dispatch) => {
    axios.get('http://localhost:8000/api/collection/')
      .then((result) => {
        dispatch(setCollections(result.data))
      })
  }
}

export const updateCollection = (collectionId, payload) => {
  return (dispatch) => {
    axios.put(`http://localhost:8000/api/collection/${collectionId}`, payload)
  }
}

export const deleteCollection = (collectionId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:8000/api/collection/${collectionId}`)
  }
}
