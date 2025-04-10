import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD

import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />

=======
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
>>>>>>> 5dd0e471d3e65a0dd3fe251eadf8597ba575b82b
)
