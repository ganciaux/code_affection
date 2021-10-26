import { Card, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fdfdff',
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    marginBottom: theme.spaging(2),
  },
  pageIcon:{
    display: 'inline-block'
  }
}))

export default function PageHeader(props) {
  const classes = useStyles()
  const { title, subTitle, icon } = props
  return (
      <Paper elevation={0} square className={classes.root}>
        <div className={classes.pageHeader}>
          <Card>{icon}</Card>
          <div>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="subtitle2" component="div">
              {subTitle}
            </Typography>
          </div>
        </div>
      </Paper>
  )
}
