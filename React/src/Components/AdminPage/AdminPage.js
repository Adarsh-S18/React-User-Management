import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './AdminPage.css'
import { axiosRequest } from '../../utils/axios';
import { Link } from 'react-router-dom';



function AdminPage() {
   
    const [rows, setRows] = useState([])
    useEffect(()=>{
        axiosRequest.get('/adminpage',{
            withCredentials: true,
            headers: 
            {
                "Content-Type": "application/json",
            }
        }).then(res=>{ 
            console.log(res.data)
            setRows(res.data)
        })
    },[])
    const handleClick =(_id)=>{
        console.log(_id)
        axiosRequest.delete(`/deleteuser/${_id}`).then(() => {
            axiosRequest.get('/adminpage').then((res) => {
                setRows(res.data)
            })
        }
        )
    }   
    return (
        <div className='maincont'>
            <h1>Admin Page</h1>
            <div className='buttonclass'>
               <Link to='/registeruser'><Button variant="contained" component="label"> Add User </Button></Link>
            </div>
            <div className='tablecont'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Mobile Number</TableCell>
                                <TableCell>Email id</TableCell>
                                <TableCell>Options</TableCell>    
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">{row.fname}</TableCell>
                                    <TableCell >{row.lname}</TableCell>
                                    <TableCell >{row.mobilenumber}</TableCell>
                                    <TableCell >{row.email}</TableCell>
                                    <TableCell >
                                        <Button variant="contained" component="label" color='error' onClick={() => handleClick(row._id)}>Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default AdminPage
