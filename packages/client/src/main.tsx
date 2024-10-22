import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~modules/app/app.module'
import './shared/styles/global-styles.css'
import { ThemeProvider } from '~shared/styles/theme.context'
import { Provider } from 'react-redux'
import { store } from '~store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
)
