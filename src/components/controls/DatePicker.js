import React from 'react'
import TextField from '@mui/material/TextField';
import {DatePicker as MuiDatePicker} from '@mui/lab';
import frLocale from 'date-fns/locale/fr';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

export default function DatePicker(props) {

    const { name, label, value, onChange } = props

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
            <MuiDatePicker disableToolbar variant="inline" inputVariant="outlined"
           label={label}
           inputFormat="dd MMMM yyyy"
           name={name}
           value={value}
           onChange={date =>onChange(convertToDefEventPara(name,date))}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}
