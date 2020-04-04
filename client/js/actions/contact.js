import axios from 'axios'

export const SET_CONTACTS = 'SET_CONTACTS'
export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts
})

export const fetchContacts = () => {
  return (dispatch) => {
    axios.get(`http://localhost:8000/api/contact`)
      .then((result) => {
        dispatch(setContacts(result.data))
      })
  }
}

export const addContact = (contact) => {
  return (dispatch) => {
    axios.post(`http://localhost:8000/api/contact`, contact)
      .then(() => {
        dispatch(fetchContacts())
      })
  }
}

export const updateContact = (id, contact) => {
  return (dispatch) => {
    axios.put(`http://localhost:8000/api/contact/${id}`, contact)
      .then(() => {
        dispatch(fetchContacts())
      })
  }
}

export const removeContact = ({ _id }) => {
  return (dispatch) => {
    axios.delete(`http://localhost:8000/api/contact/${_id}`)
      .then(() => {
        dispatch(fetchContacts())
      })
  }
}
