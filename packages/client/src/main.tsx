import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~modules/app/app.module'
import './shared/styles/global-styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
