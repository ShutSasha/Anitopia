import { createGlobalStyle } from 'styled-components'
import { ISiteColors, siteColors } from './theme.context'
import { fonts } from './fonts/fonts.const'
import { FONT_WEIGHT } from './fonts/font-weight.enum'

interface GlobalStyleprops {
  $theme: keyof ISiteColors
}

const GlobalStyle = createGlobalStyle<GlobalStyleprops>`
  body {
    color: ${({ $theme }): string => (siteColors[$theme] as ISiteColors[keyof ISiteColors]).textPrimary};
    font-family: ${fonts.montserrat};
    font-weight: ${FONT_WEIGHT.REGULAR};
  }
`

export default GlobalStyle
