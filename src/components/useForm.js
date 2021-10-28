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

export function useForm(intialValues, validateOnChange=false, validate) {
  const [values, setValues] = useState(intialValues)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    if (validateOnChange)
     validate({[name]: value})
  }

  const resetForm = () => {
    setValues(intialValues)
    setErrors({})
  }

  return { values, setValues, errors, setErrors, handleInputChange, resetForm }
}

export function Form(props) {
  const classes = useStyles()
  const { children, ...other } = props
  return (
    <form className={classes.root} {...other}>
      {children}
    </form>
  )
}
