import axios from 'axios'

 const loginInstance = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  timeout: 1000,
})

export default loginInstance;


