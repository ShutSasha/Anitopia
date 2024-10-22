import React from 'react'
import Router from '~router/router'
import GlobalStyle from '~shared/styles/global-styles'
import { useTheme } from '~shared/styles/theme.context'

const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <div className={theme}>
      <GlobalStyle $theme={theme} />
      <Router />
    </div>
  )
}

export default App
