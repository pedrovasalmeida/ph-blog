import { createStitches } from '@stitches/react'

export const { 
  config, 
  styled, 
  globalCss, 
  keyframes, 
  getCssText, 
  theme, 
  createTheme 
} = createStitches({
  theme: {
    colors: {
      primary: '#950101',

      white: '#DDDDDD',
      black: '#100F0F',
    }
  },
});
