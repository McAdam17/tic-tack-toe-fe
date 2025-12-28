import axios from "axios"

export const privateAPI = axios.create({
  baseURL: process.env.BASE_API_PRIVATE_URL || "http://localhosh:3000",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json"
  }
})

export const publicAPI = axios.create({
  baseURL: process.env.BASE_API_PUBLIC_URL || "http://localhosh:3000",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json"
  }
})