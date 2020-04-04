import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { ContactContextProvider } from './context/contact'

ReactDOM.render(
  <ContactContextProvider>
    <App />
  </ContactContextProvider>,
  document.getElementById('root')
)
