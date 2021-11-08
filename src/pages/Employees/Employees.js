import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import { PeopleOutlineOutlined } from '@mui/icons-material'
import { Paper, TableBody, TableCell, TableRow } from '@mui/material'
import { makeStyles } from '@mui/styles'
import useTable from '../../components/useTable'
import * as employeeService from '../../services/employeeService'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(5),
  },
}))

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Department', disableSorting: true },
]

export default function Employees() {
  const classes = useStyles()
  const [records, setRecords] = useState(employeeService.getEmployees())
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items
    },
  })
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn)

  console.log(records)

  return (
    <>
      <PageHeader
        title="New employee"
        subTitle="Form with validation"
        icon={<PeopleOutlineOutlined fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  )
}
