import axios from 'axios'


export const getAllUsers = () => {
   return axios.get('http://localhost:3005/users')
}
export const getAllProducts = () => {
    return axios.get(`http://localhost:3005/products`)
}
export const postUser = (username,email,password) => {
   return  axios.post('http://localhost:3005/users',{username,email,password})
}
