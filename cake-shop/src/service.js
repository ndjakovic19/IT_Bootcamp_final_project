import axios from 'axios'


export const getAllUsers = () => {
   return axios.get('https://my-json-server.typicode.com/ndjakovic19/db_json/users')
}
export const getAllProducts = () => {
    return axios.get(`https://my-json-server.typicode.com/ndjakovic19/db_json/products`)
}
export const postUser = (username,email,password) => {
   return  axios.post('https://my-json-server.typicode.com/ndjakovic19/db_json/users',{username,email,password})
}
