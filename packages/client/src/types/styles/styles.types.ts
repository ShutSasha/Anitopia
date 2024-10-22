export interface StyleElement {
  $padding?: string
  $margin?: string
}

export interface TypographyStyle {
  $fontSize?: string
  $fontWeight?: string
  $fontFamily?: string
}

export interface ColorStyle {
  $color?: string
  $backgroundColor?: string
}

export interface BorderStyle {
  $border?: string
  $borderCollapse?: string
}

// Example of a component that needs all these styles:
// export interface ButtonStyle extends StyleElement, TypographyStyle, ColorStyle {
//   $borderRadius?: string;
// }
