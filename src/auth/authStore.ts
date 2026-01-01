import { privateAPI } from "../api/client";

type AuthState = {
  status: 'loading'
} | {
  status: 'guest'
} | {
  status: 'authed', 
  user: { id: string; name: string },
}

let authState: AuthState = {status: "loading"}

export async function init() {
  try{
    const response = await privateAPI.get<{
      userName:string,
      userID: string
    }>('/me')
    const userData = response.data
    authState = {status: 'authed',
      user: {
        id: userData.userID,
        name: userData.userName
      }
    }
  }catch(e){
    authState = {status: 'guest'}
  }
}

export const getAuthState = () : AuthState => {
  return authState
}

privateAPI.interceptors.response.use(res => res, (err) => {
  const status = err?.response?.status
  if(status === 401 || status === 403){
    authState = { status: "guest" }
  }
  return Promise.reject(err)
})