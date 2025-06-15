import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import router from './Router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
