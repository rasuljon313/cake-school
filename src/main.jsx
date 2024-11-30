import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './router/App'
import "./assets/style/main.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
