import { Card, Paper } from '@mui/material'
import React from 'react'

export default function PageHeader(props) {
  const { title, subTitle, icon } = props
  return (
    <Paper elevation={0} square>
      <div>
        <Card>{icon}</Card>
      </div>
    </Paper>
  )
}
