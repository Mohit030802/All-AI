import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './services/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   
      <Provider store={store}>

        <App />
      </Provider>
    
  </BrowserRouter>
)
