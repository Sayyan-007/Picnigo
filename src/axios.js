import axios from 'axios'

export const Axios = axios.create({
    baseURL:'http://localhost:3001'

})

Axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem('access_token')
    config.headers.Authorization = `bearer ${token}`
    return config
})