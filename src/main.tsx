import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Sass/index.sass'
import SmoothScrolling from './utils/SmoothScrolling.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SmoothScrolling>
    <App />
    </SmoothScrolling>
  </React.StrictMode>,
)
