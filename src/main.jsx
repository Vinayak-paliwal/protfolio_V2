import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/bootstrap.min.css'
import './assets/css/plugins/aos.css'
import './assets/css/plugins/swiper.min.css'
import './assets/css/plugins/magnific-popup.css'
import './assets/css/plugins/odometer-min.css'
import './assets/css/style.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
