import { Grid } from '@mui/material'
import React from 'react'
import Controls from '../../components/controls/Controls'
import { useForm, Form } from '../../components/useForm'

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
]

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
          <Controls.Input
            label="Full name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sx={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
        </Grid>
      </Grid>
    </Form>
  )
}
