import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material'

export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              control={<Radio></Radio>}
              value={item.title}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}
