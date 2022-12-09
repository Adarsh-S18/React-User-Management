import React,{useState} from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    async function loginUser(event){
        event.preventDefault()    
        const response = await fetch('http://localhost:4000/api/login' , { 
            headers :{
                'Content-Type' : 'application/json'
            },
            method:'POST',
            body : JSON.stringify({
                email,
                password
            })
         })
         const data = await response.json()
         if(data.user)
         {
            localStorage.setItem('jwt',data.user)
            alert('Login Successfully Completed.!')
            window.location.href ='/';
         }
         else{
            alert('Invalid Username/Password !')
            window.location.href ='/login'
         }
         console.log(data)
    }


    return (
        <div className='Login'>
            <div>
                <h3>Login </h3>
            </div>
            <form onSubmit={loginUser}>
                <div className='form'> <TextField className='mail' type='email'value={email}  onChange={(e)=>setEmail(e.target.value)} id="outlied-basic"  label="Email" variant="outlined" /><br></br> </div>
                <div className='form2'> <TextField className='pass' id="outlined-basic" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" variant="outlined" /> </div>
                <div className='but'>  <Button variant="contained" type='submit'>  Login </Button>  </div>
            </form>
        </div>
    )
}

export default Login