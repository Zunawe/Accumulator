import React from 'react'

import mock from '../../__mocks__/collectionSchema.json'
import SchemaToForm from './components/SchemaToForm'

const App = () => {
  return (
    <>
      <SchemaToForm schema={mock} onSubmit={console.log} />
    </>
  )
}

export default App
