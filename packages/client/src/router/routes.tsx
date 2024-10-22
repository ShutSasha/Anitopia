import React from 'react'
import { RouteObject } from 'react-router-dom'

import { Home } from '~modules/app/pages/home.page'
import { NotFound } from '~modules/app/pages/not-found.page'
import { Login } from '~modules/auth/pages/login/login.page'
import { Register } from '~modules/auth/pages/register/register'
import { ROUTER_KEYS } from '~shared/keys'

export const publicRoutes: RouteObject[] = [
  {
    path: ROUTER_KEYS.ROOT,
    element: <Home />,
  },
  {
    path: ROUTER_KEYS.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTER_KEYS.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTER_KEYS.ALL_MATCH,
    element: <NotFound />,
  },
]

export const privateRoutes: RouteObject[] = []
