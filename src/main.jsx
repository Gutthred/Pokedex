import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import NavBar from './components/navBar/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <App />
  </React.StrictMode>
)
