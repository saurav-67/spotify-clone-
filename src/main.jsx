import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PlayerProvider } from './Context/PlayerContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerProvider>
    <App />
  </PlayerProvider>
  </StrictMode>,
)
