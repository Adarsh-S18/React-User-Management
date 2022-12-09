import React, { useState } from 'react'
import './AdminLogin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { axiosRequest } from '../../utils/axios';

function AdminLogin() {
  const [email,setEmail]=useState('');
  const [password,setPassword] =useState('');

  async function verifyAdmin(event)
  {
    console.log(email,password);
    event.preventDefault()
    const response = await axiosRequest.post("/adminlogin",
    {
      email,
      password
    })
    if(response.data.status =='UserOk'){
      alert('Login Successful');
      window.location.href='/adminpage';
    }
    else {
      alert('Invalid Username/Password')
      window.location.href='/adminlogin'
    }
  }

  return (
    <div>
      <div className='Login'>
            <form onSubmit={verifyAdmin}>
              <h3>Admin Login</h3>
                <div className='form'> <TextField className='mail' type='email' id="outlied-basic" value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" variant="outlined" /><br></br> </div>
                <div className='form2'> <TextField className='pass' id="outlined-basic" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" variant="outlined" /> </div>
                <div className='but'>  <Button variant="contained" type='submit'>  Login </Button>  </div>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin
