import React from 'react'
import { Form, Checkbox, Button, Input, Select, Switch, Radio, Rate } from 'antd'

const SchemaToForm = (props) => {
  const { schema, onSubmit } = props
  const [form] = Form.useForm()

  const submit = () => {
    form.submit()
    form.validateFields()
      .then((data) => {
        onSubmit(data)
      })
  }

  return (
    <>
      <FormBuilder schema={schema} form={form} />
      <Button type='submit' onClick={submit}>Submit</Button>
    </>
  )
}

const FormBuilder = (props) => {
  const { schema, form } = props

  return (
    <Form form={form}>
      {
        schema.fieldLayout.map((id) => {
          const field = schema.fields[id]
          switch (field.type) {
            case 'TEXT':
              return (
                <Form.Item key={field.id} name={field.id} label={field.label}>
                  <Input />
                </Form.Item>
              )
            case 'TEXTAREA':
              return (
                <Form.Item key={field.id} name={field.id} label={field.label}>
                  <Input.TextArea rows={4} />
                </Form.Item>
              )
            case 'SELECT':
              return (
                <Form.Item key={field.id} name={field.id} label={field.label}>
                  <Select>
                    {
                      field.options.map((option) => (
                        <Select.Option key={option}>{option}</Select.Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              )
            case 'RADIO':
              return (
                <Form.Item key={field.id} name={field.id} label={field.label}>
                  <Radio.Group>
                    {
                      field.options.map((option) => (
                        <Radio key={option} value={option}>{option}</Radio>
                      ))
                    }
                  </Radio.Group>
                </Form.Item>
              )
            case 'CHECKBOX':
              return (
                <Form.Item key={field.id} name={field.id} label={field.label}>
                  <Checkbox.Group options={field.options} />
                </Form.Item>
              )
            case 'SWITCH':
              return (
                <Form.Item key={field.id} name={field.id} label={field.label}>
                  <Switch />
                </Form.Item>
              )
            case 'RATING':
              return (
                <Form.Item key={field.id} name={field.id} label={field.label}>
                  <Rate allowHalf allowClear />
                </Form.Item>
              )
            default:
              return null
          }
        })
      }
    </Form>
  )
}

export default SchemaToForm
