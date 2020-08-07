import React from 'react'

import mock from '../../__mocks__/collectionSchema.json'
import SchemaToForm from './components/SchemaToForm'
import SchemaBuilder from './components/SchemaBuilder'

const App = () => {
  return (
    <>
      {/* <SchemaToForm schema={mock} onSubmit={console.log} /> */}
      <SchemaBuilder />
    </>
  )
}

export default App
