import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './styles/globals.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
