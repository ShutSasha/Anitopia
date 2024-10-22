import React, { FC, useState } from 'react'
import { useTheme } from '~shared/styles/theme.context'
import { Flex, FlexWithBackground } from '../flex/flex.component'
import { Logo } from '../logo/logo.component'
import { BurgerMenu } from '../burger-menu/burger-menu.component'

export const Header: FC = (): JSX.Element => {
  const [isBurgerOpen, setBurgerOpen] = useState<boolean>(false)
  const { theme } = useTheme()

  const handleBurgerOpen = (): void => {
    setBurgerOpen((prev) => !prev)
  }

  return (
    <FlexWithBackground theme={theme} $padding='10px 20px' $align='center' $justify='space-between'>
      <Flex $align='center'>
        <BurgerMenu $isopen={isBurgerOpen} handleClick={handleBurgerOpen} $margin='0 24px 0 0' />
        <Logo />
      </Flex>
      <Flex>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Flex>
      <div className='global-chat'>notif,user,chat</div>
    </FlexWithBackground>
  )
}
