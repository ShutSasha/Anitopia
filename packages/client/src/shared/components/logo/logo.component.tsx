import React, { FC } from 'react'
import styled from 'styled-components'

interface LogoProps {
  height?: string
  width?: string
}

const StyLedImage = styled.img<LogoProps>`
  height: ${({ height }): string => height || ''};
  width: ${({ width }): string => width || ''};
`

export const Logo: FC<LogoProps> = (props): JSX.Element => {
  return <StyLedImage src='/header-logo.svg' alt='Logo' {...props} />
}
