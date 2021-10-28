import React from 'react'
import './App.css'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Employees from '../pages/Employees/Employees'
import theme from './Theme'

const useStyles = makeStyles((theme) => ({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
}))

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
