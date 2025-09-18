import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'                     // <— importa axios
import './index.css'
import App from './App.jsx'

// Config global de Axios
axios.defaults.baseURL = import.meta.env.VITE_API_URL; // ej: https://agrocoop-backend.onrender.com
axios.defaults.withCredentials = true;                 // <— aquí habilitas cookies

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
