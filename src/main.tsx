import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  //El strictMode lo que hace es levantar una vez el componente romperlo, levantarlo otra vez y comparar estados
  <StrictMode>
    <App />
  </StrictMode>,
)
