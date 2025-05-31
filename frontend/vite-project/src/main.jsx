import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './logInOut/loginPage'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage/>
  </StrictMode>
)
