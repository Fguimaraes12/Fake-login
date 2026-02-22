import { useEffect, useReducer, useState, createContext, useMemo } from "react"
import loginInstance from "../auth/fakeAuth"
import { initialState, Reducer } from "../reducers/reducer"



const LoginContext = createContext()

function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authData, setAuthData] = useState(null) // dados basicos do login 
  const [profileData, setProfileData] = useState(null) // dados completos de /me (address, company, bank, crypto, etc.)



const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("REFRESH_TOKEN")
  if(refreshToken){
    try{
      const {data} = await loginInstance.post("/refresh", {
          refreshToken: `${refreshToken}`,
          expiresInMins: 30,
      })
      console.log(data)
      localStorage.setItem("ACCESS_TOKEN", data.accessToken)
    }catch (error) {
        console.error("Token inválido ou expirado:", error)
        return null
      }
  }
}


// Busca dados detalhados do perfil (auth/me) - usado no modal
const handleProfile = async () => {
    const token = localStorage.getItem("REFRESH_TOKEN")
    if (token) {
      try {
        const { data } = await loginInstance.get("/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include'
        })
        setProfileData(data)
        return data
      } catch (error) {
        console.error("Token inválido ou expirado:", error)
        return null
      }
    }
    return null
}



//CHAMA API QUANDO APERTA O BUTTON
  const handleButton = async () => {
    dispatch({ type: "LOGIN_START" })

    try {
      const { data } = await loginInstance.post("/login", {
        username,
        password,
      })
      localStorage.setItem("REFRESH_TOKEN", data.refreshToken)
      setAuthData(data)
      dispatch({ type: "LOGIN_SUCCESS", payload: data })
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: "Email ou senha inválido." })
    }
  }

  // VALUE -> USERNAME & PASSWORD
  const handleUsername = (e) => {
    const { value } = e.target
    setUsername(value)
  }
  const handlePassword = (event) => {
    const { value } = event.target
    setPassword(value)
  }

  const contextValue = useMemo(
    () => ({
      functions: { handleButton, handleProfile, handlePassword, handleUsername, refreshAccessToken },
      states: { state, username, password, authData, profileData },
    }),
    [state, username, password, authData, profileData]
  )

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider, LoginContext }