import React, { FC, ReactNode } from 'react'
import { Header } from '../header/header.component'

interface AppWrapperProps {
  children: ReactNode
}

export const AppWrapper: FC<AppWrapperProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
