import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { axiosRequest } from '../../utils/axios'
import TextField from '@mui/material/TextField';
import './Profile.css'

function Profile() {
    const [user, setuser] = useState({})
    const [image, setImage] = useState('')
    console.log(image, 'hi')
    useEffect(() => {
        console.log('res');
        axiosRequest.get('/profile', {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => {
            console.log(res.data);
            setuser(res.data)
        })

    },[])

    const handleClick = () => {

        const formData = new FormData()
        console.log(image, '.,..,,..,.,.');
        formData.append('image', image)
        axiosRequest.post('/addimage',formData ).then(()=>{
            axiosRequest.get('/profile').then(res=>{
                setuser(res.data)
            })
        })
    }
    return (
        <div className='profile'>
            <div className='sub-pro'>
                <div className='pro-pic'>
                    <div className='pic-container'>
                        <img className='picture'
                        src={user.image ? 'http://localhost:4000/'+user.image : 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'} 
                        alt='Profile Pic' />
                    </div>
                    <div className='buttoo'>
                        <form encType='multipart/form-data'>
                            <Button variant="contained" component="label"> Upload <input hidden accept="image/*" onChange={(e) => setImage(e.target.files[0])} type="file" /> </Button>
                            <Button onClick={handleClick}>SAVE</Button>
                        </form>
                    </div>
                </div>
                <div className='info'>
                    <div className='informations'>
                        {/* <TextField value={user.fname} id="outlined-read-only-input" className='eachinfo'  label="First Name"  InputProps={{ readOnly: true, }} /> */}
                        <TextField id="outlined-number" className='eachinfo' label="First Name" value={user.fname} InputLabelProps={{ shrink: true, }} />
                    </div>
                    <div className='informations'>
                        <TextField id="outlined-number" className='eachinfo' label="Last Name" value={user.lname} InputLabelProps={{ shrink: true, }} />
                    </div>
                    <div className='informations'>
                        <TextField id="outlined-number" className='eachinfo' label="Mobile Number" value={user.mobilenumber} InputLabelProps={{ shrink: true, }} />
                    </div>
                    <div className='informations'>
                        <TextField id="outlined-number" className='eachinfo' label="Email" value={user.email} InputLabelProps={{ shrink: true, }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile