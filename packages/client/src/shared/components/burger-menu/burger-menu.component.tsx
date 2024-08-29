import React, { FC } from 'react'
import styled from 'styled-components'

interface StyledBurgerMenu {
  $isopen: boolean
  margin?: string
  padding?: string
}

interface BurgerMenuProps extends StyledBurgerMenu {
  handleClick: () => void
}

const Toggle = styled.button<StyledBurgerMenu>`
  margin: ${({ margin }): string => margin || '0'};
  padding: ${({ padding }): string => padding || '0'};
  width: 24px;
  height: 20px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  overflow: hidden;
  border: none;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: white;
    transition: all 0.3s ease-out;
  }

  :nth-child(1) {
    top: ${({ $isopen }): string => ($isopen ? '' : '0')};
    transform: rotate(${({ $isopen }): string => ($isopen ? '45deg' : '0')});
  }

  :nth-child(2) {
    transition: all 0.25s ease-out;
    visibility: ${({ $isopen }): string => ($isopen ? 'hidden' : 'visible')};
    opacity: ${({ $isopen }): string => ($isopen ? '0' : '1')};
  }

  :nth-child(3) {
    bottom: ${({ $isopen }): string => ($isopen ? '' : '0')};
    transform: rotate(${({ $isopen }): string => ($isopen ? '-45deg' : '0')});
  }
`

export const BurgerMenu: FC<BurgerMenuProps> = ({ handleClick, ...props }): JSX.Element => {
  return (
    <Toggle {...props} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </Toggle>
  )
}
