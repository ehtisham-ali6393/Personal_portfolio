import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'
import './styles/navbar.css'
import './styles/home.css'
import './styles/about.css'
import './styles/contact.css'  
import './styles/project.css'
import './styles/skills.css'
import './styles/education.css'
import './styles/experience.css'
import './styles/footer.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
