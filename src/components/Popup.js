import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Controls } from './controls/Controls'

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: '0px',
  },
}))

export default function Popup(props) {
  const classes = useStyles()
  const { title, children, openPopup, setOpenPopup } = props
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.Button text="X" color="secondary"></Controls.Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  )
}
