import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~modules/app/app.module'
import './shared/styles/global-styles.css'
import { ThemeProvider } from '~shared/styles/theme.context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
