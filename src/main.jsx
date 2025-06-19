import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // global styles
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App title="Hello from main jsx!" />
  </>,
)
