import React from 'react'
import { Form, Input, Modal } from 'antd'

const ContactFormModal = ({ prefillData, visible, onCancel, onOk }) => {
  const [form] = Form.useForm()

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      onOk={() => {
        form.validateFields()
          .then((data) => {
            form.resetFields()
            onOk(data)
          })
      }}
    >
      <Form form={form} initialValues={prefillData}>
        <Form.Item
          name={['name', 'given_name']}
          label='First Name'
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['name', 'surname']}
          label='Last Name'
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['phone_number']}
          label='Phone Number'
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['email']}
          label='Email'
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ContactFormModal
