import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routers from './Products/Routers'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers/>
  </StrictMode>,
)
