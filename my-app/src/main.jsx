import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppValue from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppValue />
  </StrictMode>,
)
