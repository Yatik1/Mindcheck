import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Navbar />
     <App />
  </BrowserRouter>
)