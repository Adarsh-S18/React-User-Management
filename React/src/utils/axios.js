import axios from 'axios'


export const axiosRequest = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
      "jwt": localStorage.getItem('jwt') || ""
    }
})