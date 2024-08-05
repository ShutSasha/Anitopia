import * as React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'

const combinedRoutes = [...publicRoutes, ...privateRoutes]

const Routes: React.FunctionComponent = () => {
  const element = useRoutes(combinedRoutes)
  return element
}

const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default Router
