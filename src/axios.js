import axios from 'axios'

export const Axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

Axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem('access_token')
    config.headers.Authorization = `bearer ${token}`
    return config
})

