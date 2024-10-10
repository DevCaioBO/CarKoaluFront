import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from '../src/pages/Register/Register'

import './index.css'

import App from './app'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)