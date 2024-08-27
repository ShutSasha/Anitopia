import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTER_KEYS } from '~shared/keys'
import { useGetPokemonByNameQuery } from '~services/pokemon.service'
import { useGetUsersQuery } from '~store/api/userApi'

export const Home: FC = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('ditto')
  const { data: users } = useGetUsersQuery()

  console.log(users)

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
      <Link to={ROUTER_KEYS.LOGIN}>Login</Link>
      <Link to={ROUTER_KEYS.REGISTER}>Register</Link>
    </>
  )
}
