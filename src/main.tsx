import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppRouter } from './router/AppRouter'

const date = new Date().getFullYear()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
      <p>&copy; {date}</p>
    </BrowserRouter>
  </React.StrictMode>
)
