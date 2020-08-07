import React, { useState } from 'react'
import { Form, Checkbox, Button, Input, Select, Switch, Radio, Rate } from 'antd'

const SchemaBuilder = (props) => {
  const [form] = Form.useForm()
  const [numItems, setNumItems] = useState(1)

  const submit = () => {
    form.submit()
    form.validateFields()
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <>
      <Builder form={form} numItems={numItems} />
      <Button onClick={() => setNumItems(numItems + 1)}>Add New</Button>
      <Button type='submit' onClick={submit}>Submit</Button>
    </>
  )
}

const Builder = (props) => {
  const { numItems, form } = props

  return (  
    <Form form={form}>
      {
        (new Array(numItems)).fill(undefined).map((_, i) => {
          return (
            <>
              <Form.Item key={`${i}.type`} name={`${i}.type`} label="Type">
                <Input />
              </Form.Item>
              <Form.Item key={`${i}.label`} name={`${i}.label`} label="Label">
                <Input />
              </Form.Item>
            </>
          )
        })
      }
    </Form>
  )
}

export default SchemaBuilder
