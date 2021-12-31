import React from 'react'
// import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import './Styling.css'

const Students = ()=>{
function createData(name, age, Course, Batch, Change) {
  return { name, age, Course, Batch, Change };
}


const rows = [
  createData('prasad', 22, 'MERN', 'SEP', <NavLink to='#'>Edit</NavLink>),
  createData('rajesh', 23, 'MERN', 'AUG', <NavLink to='#'>Edit</NavLink>), 
  createData('vamshi', 23, 'MEAN', 'NOV', <NavLink to='#'>Edit</NavLink>), 
  createData('arun', 25, 'MEAN','AUG', <NavLink to='#'>Edit</NavLink>), 
  createData('varma', 24, 'MERN', 'NOV', <NavLink to='#'>Edit</NavLink>), 
];

  return (
<div>
   <button className='main-body'><div >Students Data</div></button>
    <TableContainer className='main2' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Month</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{row.Change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
  
}

export default Students
