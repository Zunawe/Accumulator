import React, { useContext, useEffect, useState } from 'react'

import Contact from './components/Contact'
import { ContactContext } from './context/contact'
import { fetchContacts, addContact } from './actions/contact'
import { Button } from 'antd'
import ContactFormModal from './components/ContactFormModal'

const App = () => {
  const [state, dispatch] = useContext(ContactContext)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => dispatch(fetchContacts()), [])

  return (
    <>
      {state.contacts.map((contact) => <Contact key={contact._id} contact={contact} />)}
      <Button onClick={() => setModalOpen(true)}>Add New</Button>
      <ContactFormModal
        visible={modalOpen}
        onOk={(contact) => {
          dispatch(addContact(contact))
          setModalOpen(false)
        }}
        onCancel={() => setModalOpen(false)}
      />
    </>
  )
}

export default App
