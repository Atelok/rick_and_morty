import React, { Provider } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'




ReactDOM.render(document.getElementById('root'));
  <Provider store = {store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  
