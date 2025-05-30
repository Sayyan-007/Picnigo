import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './Redux/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
