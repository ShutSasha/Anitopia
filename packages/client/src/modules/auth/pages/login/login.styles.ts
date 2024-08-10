import { css } from '@emotion/css'
import { ISiteColors, siteColors } from '~shared/styles/theme.context'

export const buttonStyles = (theme: keyof ISiteColors): string => css`
  background-color: ${siteColors[theme].main};
  color: ${siteColors[theme].textPrimary};
  border: 2px solid ${theme === 'whiteTheme' ? '#000' : '#EDEDED'};
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${siteColors[theme].focusing};
    color: ${siteColors[theme].textPrimary};
  }
`
