import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTER_KEYS } from '~shared/keys'
import { useGetUsersQuery } from '~store/api/userApi'

export const Home: FC = () => {
  const { data: users } = useGetUsersQuery()

  console.log(users)

  return (
    <>
      <Link to={ROUTER_KEYS.LOGIN}>Login</Link>
      <Link to={ROUTER_KEYS.REGISTER}>Register</Link>
    </>
  )
}
