import axios from "axios"

export const Api = axios.create({
  baseURL: "https://dummyjson.com/auth",
  timeout: 1000
})








