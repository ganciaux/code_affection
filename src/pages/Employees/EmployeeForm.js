import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import React from 'react'
import { useForm, Form } from '../../components/useForm'

const intialValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmendId: '',
  hireDate: new Date(),
  isPermanent: false,
}

export default function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(intialValues)
  return (
    <Form>
      <Grid container>
        <Grid item sx={6}>
          <TextField
            variant="outlined"
            label="Full name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sx={6}>
          <FormControl>
            <FormLabel>
              <RadioGroup
                row
                name="gender"
                value={values.gender}
                onChange={handleInputChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio></Radio>}
                  label="male"
                ></FormControlLabel>
                <FormControlLabel
                  value="female"
                  control={<Radio></Radio>}
                  label="female"
                ></FormControlLabel>
                <FormControlLabel
                  value="others"
                  control={<Radio></Radio>}
                  label="others"
                ></FormControlLabel>
              </RadioGroup>
            </FormLabel>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  )
}
