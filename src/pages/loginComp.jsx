import {  useContext, useEffect, useState } from "react";
import { Api } from "../auth/fakeAuth";
import { AuthContext } from "../contexts/AuthContext";


function LoginComp() {
  const { state, dispatch } = useContext(AuthContext)
  const [username, setUsername] = useState("emilys")
  const [password, setPassword] = useState("emilyspass")


  useEffect(() => {
    const autoApi = async () => {
      const token = localStorage.getItem("TOKEN")
      if(!token) return
      try{
         const {data} = await Api.get("/me", {
          headers:{
            'Authorization': `Bearer ${token}`
          }
         })
         dispatch({ type: "LOGIN_SUCCESS", payload: data })
      }catch(err){
        console.log(err)
      }
    }
    autoApi()
  }, [])

  const handleButton = async () => {
    dispatch({ type: "LOGIN_START" })
    try{
      const {data} = await Api.post("/login", {
        username: username,
        password: password,
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: data })
      localStorage.setItem("TOKEN", data.accessToken)
      console.log(data)

    }catch(err){
      dispatch({ type: "LOGIN_ERROR", payload: "login ou senha incorreto"})
    }
  }


  return (
 <div>
    <div>
      {state.error ? <h1>{state.error}</h1> : null}
    </div>
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleButton} disabled={state.loading === true}>Enviar</button>
    </div>

 </div>)
}

export default LoginComp;