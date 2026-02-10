import { useEffect, useReducer, useState, createContext, useMemo } from "react"
import  loginInstance  from "../service/login"
import { initialState, Reducer } from "../reducers/loginReducer"
import { data } from "react-router-dom"

const LoginContext = createContext()

function LoginProvider({children}){
const [state, dispatch] = useReducer(Reducer, initialState)
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [authData, setAuthData] = useState(null)
console.log(state)

// LOGIN AUTOMATICO 
 useEffect(() => {
  const loginToken = async () => {
    const token = localStorage.getItem("TOKEN_ACCESS");

    if (token) {
      try {
        const { data } = await loginInstance.get("/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch({type: "LOGIN_SUCCESS", payload: data})
        setAuthData(data)
      } catch (error) {
        console.error("Token inválido ou expirado:", error);
      }
    }
  };

  loginToken();
}, []); 

// VALUE -> USERNAME & PASSWORD
const handleUsername = (e) => {
  const {value} = e.target
  setUsername(value)
}
const handlePassword = (event) => {
  const {value} = event.target
  setPassword(value)
}


//CHAMA API QUANDO APERTA O BUTTON
const handleButton = async () => {
  dispatch({type: "LOGIN_LOADING", payload: true})

   try{
   const { data } = await loginInstance.post('/login',{
     username: username,
     password: password,
   })
      localStorage.setItem("TOKEN_ACCESS", data.accessToken)
      setAuthData(data)
      dispatch({type:"LOGIN_SUCCESS", payload: data})
   } catch(error){
     dispatch({type: "LOGIN_ERROR", payload: "Email ou senha inválido."})
   } finally{
    dispatch({type: "LOGIN_LOADING", payload: false})
   }

 }

  const contextValue = useMemo(() => ({
    functions: { handleButton, handlePassword, handleUsername },
    states: { state, username, password, authData },
  }), [handleButton, handlePassword, handleUsername, username, password, authData]);

  return(
    <LoginContext.Provider value={ contextValue }>
      {children}
    </LoginContext.Provider>
  )
}

export {LoginProvider, LoginContext}