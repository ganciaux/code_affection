import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import {
  AddIcCallOutlined,
  PeopleOutlineOutlined,
  Search,
} from '@mui/icons-material'
import {
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import useTable from '../../components/useTable'
import * as employeeService from '../../services/employeeService'
import { Controls } from '../../components/controls/Controls'
import Popup from '../../components/Popup'
import Notification from '../../components/Notification'
import ConfirmDialog from '../../components/ConfirmDialog'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(5),
  },
  searchInput: {
    width: '75%',
  },
  newButton: {
    position: 'absolute',
    right: '10px',
  },
}))

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Department' },
  { id: 'actions', label: 'Actions', disableSorting: true },
]

export default function Employees() {
  const classes = useStyles()
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [records, setRecords] = useState(employeeService.getEmployees())
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items
    },
  })
  const [openPopup, setOpenPopup] = useState(false)
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  })
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn)

  const handleSearch = (e) => {
    let target = e.target
    setFilterFn({
      fn: (items) => {
        if (target.value === '') return items
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value),
          )
      },
    })
  }

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) employeeService.insertEmployee(employee)
    else employeeService.updateEmployee(employee)
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)
    setRecords(employeeService.getEmployees())
    setNotify({
      isOpen: true,
      message: 'Submitted Successfully',
      type: 'success',
    })
  }

  const openInPopup = (item) => {
    setRecordForEdit(item)
    setOpenPopup(true)
  }

  const onDelete = (id) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false })
    employeeService.deleteEmployee(id)
    setRecords(employeeService.getEmployees())
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'error',
    })
  }

  return (
    <>
      <PageHeader
        title="New employee"
        subTitle="Form with validation"
        icon={<PeopleOutlineOutlined fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search employee"
            className={classes.searchInput}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Controls.Button
            text="Add employee"
            variant="outlined"
            startIcon={<AddIcCallOutlined />}
            className={classes.newButton}
            onClick={() => {
              setRecordForEdit(null)
              setOpenPopup(true)
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item)
                    }}
                  >
                    <PeopleOutlineOutlined fontSize="small"></PeopleOutlineOutlined>
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="secondary"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: 'Are you sure',
                        subTitle: "You can't undo this operation",
                        onConfirm: () => onDelete(item.id),
                      })
                    }}
                  >
                    <PeopleOutlineOutlined fontSize="small"></PeopleOutlineOutlined>
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup title="Employee" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <EmployeeForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      ></ConfirmDialog>
    </>
  )
}
