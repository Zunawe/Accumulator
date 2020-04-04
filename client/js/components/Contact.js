import React, { useCallback, useContext, useState } from 'react'
import { Card, Button, Row, Col } from 'antd'
import { PhoneFilled, MailOutlined } from '@ant-design/icons'

import { ContactContext } from '../context/contact'
import { updateContact, removeContact } from '../actions/contact'
import ContactFormModal from './ContactFormModal'

const Contact = (props) => {
  const { contact } = props
  const [, dispatch] = useContext(ContactContext)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Card
        title={`${contact.name.given_name} ${contact.name.surname}`}
        className='contact'
      >
        <Row>
          <PhoneFilled />{contact.phone_number}
        </Row>
        <Row>
          <MailOutlined />{contact.email}
        </Row>
        <Row justify='space-around'>
          <Col span={12}>
            <Button
              type='primary'
              onClick={() => setModalOpen(true)}
            >
              Edit
            </Button>
          </Col>
          <Col span={12}>
            <Button
              type='primary'
              danger
              onClick={() => dispatch(removeContact(contact))}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Card>
      <ContactFormModal
        visible={modalOpen}
        prefillData={contact}
        onCancel={() => setModalOpen(false)}
        onOk={(data) => {
          dispatch(updateContact(contact._id, data))
          setModalOpen(false)
        }}
      />
    </>
  )
}

export default Contact
