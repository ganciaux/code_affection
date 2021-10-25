import React from 'react'
import { makeStyles, withStyles } from '@mui/styles';

const useStyles = makeStyles({
    SideMenu:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100vh',
        backgroundColor:'#253053',
    }
});

export default function SideMenu() {
    const classes = useStyles();
    return (
        <div className={classes.SideMenu}>
            
        </div>
    )
}
