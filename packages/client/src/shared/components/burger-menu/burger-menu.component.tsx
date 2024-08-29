import React, { FC } from 'react'
import styled from 'styled-components'

interface BurgerMenuProps {
  margin?: string
  padding?: string
}

const StyledBurger = styled.span`
  position: absolute;
  top: 45%;
  display: block;
  height: 2px;
  width: 28px;
  background: white; // переделать тут на theme

  &::before {
    position: absolute;
    top: 10px;
    left: 0;
    content: '';
    height: 2px;
    width: 28px;
    background: white; // переделать тут на theme
  }

  &::after {
    position: absolute;
    top: -10px;
    left: 0;
    content: '';
    height: 2px;
    width: 28px;
    background: white; // переделать тут на theme
  }

  &:hover {
  }
`

const BurgerWrapper = styled.div<BurgerMenuProps>`
  margin: ${({ margin }): string => margin || '0'};
  padding: ${({ padding }): string => padding || '0'};
  width: 28px;
  height: 28px;
  position: relative;
  cursor: pointer;
`

export const BurgerMenu: FC<BurgerMenuProps> = (props): JSX.Element => {
  return (
    <BurgerWrapper {...props}>
      <StyledBurger />
    </BurgerWrapper>
  )
}
