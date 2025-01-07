import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Navbar from './navbar.jsx';
import LandingPage from './body.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <LandingPage></LandingPage>
    <Navbar></Navbar>


  </StrictMode>,
)
