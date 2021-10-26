import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}))

export function useForm(intialValues) {
  const [values, setValues] = useState(intialValues)
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  return { values, setValues, handleInputChange }
}

export function Form(props) {
  const classes = useStyles()
  return <form className={classes.root}>{props.children}</form>
}
