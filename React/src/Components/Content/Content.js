import React, { useEffect } from 'react'
import {axiosRequest} from '../../utils/axios'
import './Content.css'

// import { useNavigate } from 'react-router-dom'

function Content() {

  useEffect(() => {
    console.log('res');
    axiosRequest.get('/home', {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => {
      console.log(res.data);
    })
    
  }, [])

  return (
    <div>
      <div class="container">
        <div  class="card card0">
          <div class="border">
            <h2>Al Pacino</h2>
            <div class="icons">
              <i class="fa fa-codepen" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="card card1">
          <div class="border">
            <h2>Ben Stiller</h2>
            <div class="icons">
              <i class="fa fa-codepen" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="card card2">
          <div class="border">
            <h2>Patrick Stewart</h2>
            <div class="icons">
              <i class="fa fa-codepen" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content