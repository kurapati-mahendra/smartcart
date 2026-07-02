import axios from 'axios'

export const axiosi=axios.create({withCredentials:true,baseURL:process.env.REACT_APP_BASE_URL || 'https://smartcart-backend-6kpv.onrender.com'})