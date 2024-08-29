import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { ISiteColors, siteColors } from '~shared/styles/theme.context'

interface StyledFlexProps {
  direction?: string
  align?: string
  justify?: string
  margin?: string
  padding?: string
}

interface FlexProps extends StyledFlexProps {
  children: ReactNode
}

interface FlexWithBackgroundProps extends FlexProps {
  theme: keyof ISiteColors
  background?: string
}

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${({ direction }): string => direction || 'row'};
  align-items: ${({ align }): string => align || 'stretch'};
  justify-content: ${({ justify }): string => justify || 'flex-start'};
  margin: ${({ margin }): string => margin || '0'};
  padding: ${({ padding }): string => padding || '0'};
`

const StyledFlexWithBackground = styled(StyledFlex)<{ theme: keyof ISiteColors; background?: string }>`
  backgroudn: ${({ theme, background }): string => (background ? background : siteColors[theme].main)};
`

export const Flex: FC<FlexProps> = ({ children, ...styles }): JSX.Element => {
  return <StyledFlex {...styles}>{children}</StyledFlex>
}

export const FlexWithBackground: FC<FlexWithBackgroundProps> = ({ children, ...styles }): JSX.Element => {
  return <StyledFlexWithBackground {...styles}>{children}</StyledFlexWithBackground>
}
