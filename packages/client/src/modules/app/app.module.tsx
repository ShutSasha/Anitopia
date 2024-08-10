import React from 'react'
import Router from '~router/router'
import { useTheme } from '~shared/styles/theme.context'

const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <div className={theme}>
      <Router />
    </div>
  )
}

export default App
