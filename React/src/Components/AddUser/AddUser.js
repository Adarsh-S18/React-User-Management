import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './AddUser.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddUser() {
    const history = useNavigate()
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function addUser(event){
        event.preventDefault()    
        const response = await fetch('http://localhost:4000/api/register' , { 
            headers :{
                'Content-Type' : 'application/json'
            },
            method:'POST',
            body : JSON.stringify({
                fname,
                lname,
                mobilenumber,
                email,
                password
            })
         })
         const data = await response.json()
         if(data.status==='OK')
         {
            history('/adminpage')
         }
         console.log(data)
    }
  return (
    <div className='Login'>
    <div>
        <h3>ADD USER</h3>
    </div>
    <form onSubmit={addUser}>
        <div className='form'>
            <TextField value={fname} onChange={(e)=>setFname(e.target.value) } className='inputline' type='text' id="outlined-basic" label="First Name" variant="outlined" />
        </div>
        <div className='form'>
            <TextField  value={lname} onChange={(e)=>setLname(e.target.value)} type='text' className='inputline' id="outlined-basic" label="Last Name" variant="outlined" />
        </div>
        <div className='form'>
            <TextField  value={mobilenumber} onChange={(e)=>setMobilenumber(e.target.value)} type='number' className='inputline' id="outlined-basic" label="Mobile Number" variant="outlined" />
        </div>
        <div className='form'>
            <TextField  value={email}  onChange={(e)=>setEmail(e.target.value)} className='inputline' id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div className='form'>
            <TextField  value={password} onChange={(e)=>setPassword(e.target.value)} className='inputline' id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div className='but'>
            <Button type='submit' variant="contained"  >Signup</Button>
        </div>
    </form>
</div>
  )
}

export default AddUser
