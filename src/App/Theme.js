import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ff',
      light: '#0f8',
    },
    secondary: {
      main: '#f00',
      light: '#f80',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  shape: {
    borderRadius: '12px',
  },
  components: {
    // Name of the component
    MuiIconButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
      },
    },
  },
})

export default theme
