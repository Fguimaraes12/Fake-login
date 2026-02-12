import { useEffect, useReducer, useState, createContext, useMemo } from "react"
import loginInstance from "../auth/fakeAuth"
import { initialState, Reducer } from "../reducers/reducer"



const LoginContext = createContext()

function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authData, setAuthData] = useState(null)


// LOGIN AUTOMATICO 
  useEffect(() => {
    const loginToken = async () => {
      const token = localStorage.getItem("TOKEN_ACCESS")
      if (token) {
        try {
          const { data } = await loginInstance.get("/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          dispatch({ type: "LOGIN_SUCCESS", payload: data })
          setAuthData(data)
        } catch (error) {
          console.error("Token inválido ou expirado:", error)
        }
      }
    }

    loginToken()
  }, [])

// VALUE -> USERNAME & PASSWORD
  const handleUsername = (e) => {
    const { value } = e.target
    setUsername(value)
  }
  const handlePassword = (event) => {
    const { value } = event.target
    setPassword(value)
  }


//CHAMA API QUANDO APERTA O BUTTON
  const handleButton = async () => {
    dispatch({ type: "LOGIN_START" })

    try {
      const { data } = await loginInstance.post("/login", {
        username,
        password,
      })
      localStorage.setItem("TOKEN_ACCESS", data.accessToken)
      setAuthData(data)
      dispatch({ type: "LOGIN_SUCCESS", payload: data })
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: "Email ou senha inválido." })
    }
  }

  const contextValue = useMemo(
    () => ({
      functions: { handleButton, handlePassword, handleUsername },
      states: { state, username, password, authData },
    }),
    [state, username, password, authData]
  )

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider, LoginContext }