import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import './index.css'
import App from './App.jsx'
import { ContexApi } from './components/ContexApi.jsx';

createRoot(document.getElementById('root')).render(
  <ContexApi>
    <App />
  </ContexApi>,
)
