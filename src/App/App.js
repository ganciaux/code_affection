import React from 'react'
import './App.css'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PageHeader from '../components/PageHeader'
import { PeopleOutlineOutlined } from '@mui/icons-material'

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
})

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
        <PageHeader
          title="Page title"
          subTitle="Page description"
          icon={<PeopleOutlineOutlined />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
