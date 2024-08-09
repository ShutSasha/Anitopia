import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTER_KEYS } from '~shared/keys'

export const Home: FC = () => {
  return (
    <>
      <Link to={ROUTER_KEYS.LOGIN}>Login</Link>
      <Link to={ROUTER_KEYS.REGISTER}>Register</Link>
    </>
  )
}
