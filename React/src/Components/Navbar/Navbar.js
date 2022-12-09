import './Navbar.css'
import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='Navbar'>
       <Link to='/'> <img className='logo' src='https://fontmeme.com/images/Columbia_Pictures_print_logo%E2%80%94fontmeme.png' alt='logo   '/></Link>
       <Link to='/profile'> <img className='avatar' src='https://www.pngitem.com/pimgs/m/516-5167304_transparent-background-white-user-icon-png-png-download.png' alt='Avatar'/></Link>
    </div>
  )
}

export default Navbar
