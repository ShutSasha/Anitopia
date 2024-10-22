import styled from 'styled-components'
import { ISiteColors, siteColors } from '~shared/styles/theme.context'

interface ButtonProps {
  theme: keyof ISiteColors
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }): string => siteColors[theme].main};
  color: ${({ theme }): string => siteColors[theme].textPrimary};
  border: 2px solid ${({ theme }): string => (theme === 'whiteTheme' ? '#000' : '#EDEDED')};
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({ theme }): string => siteColors[theme].focusing};
    color: ${({ theme }): string => siteColors[theme].textPrimary};
  }
`
