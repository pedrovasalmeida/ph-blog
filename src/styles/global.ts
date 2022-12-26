import { globalCss } from "@/styles";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Open Sans',
    fontSize: 16,

    width: '100vw',
    minHeight: '100vh',

    backgroundColor: '$black',
    color: '$white'
  },

  'body, input, textarea, button': {
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },

  '[disabled]': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
    padding: 0,
  }
})