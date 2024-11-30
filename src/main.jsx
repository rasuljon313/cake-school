import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './router/App'
import "./assets/sass/main.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
