import {
  ChatBubbleOutlineOutlined,
  NotificationsNone,
  PowerSettingsNew,
  Search as SearchIcon,
} from '@mui/icons-material'
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    transform: 'translateZ(0)',
  },
  SearchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}`,
    fontSize: '0.8rem',
    '&:hover': { backgroundColor: '#888' },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#fff', transform: 'translateZ(0)' }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search"
              startAdornment={<SearchIcon fontSize="small" />}
              className={classes.SearchInput}
            ></InputBase>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone fontSize="small"></NotificationsNone>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineOutlined fontSize="small"></ChatBubbleOutlineOutlined>
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew fontSize="small"></PowerSettingsNew>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
