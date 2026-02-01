import { useContext, useState } from "react";
import { fakeLogin } from "../auth/fakeAuth";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";


function LoginComp() {
  const { state, dispatch } = useContext(AuthContext)
  const [gmail, setGmail] = useState("")
  const [senha, setSenha] = useState("")


  const handleButton = () => {
    dispatch({ type: "LOGIN_START" })

    const usuario = {
      gmail,
      senha
    }

    fakeLogin(usuario)
      .then(user => (
        dispatch({ type: "LOGIN_SUCCESS", payload: user })))
      .catch(err => dispatch({ type: "LOGIN_ERROR", payload: err.message }))

  }


  const handleButtonLogout = () => {
    dispatch({ type: "LOGOUT" })
  }


  return (<>
    {state.error ? <h1>{state.error}</h1> : null}
    {state.isLogged ? <h1>{state.user.name}</h1> : null}
    <input type="text" onChange={(e) => setGmail(e.target.value)} />
    <input type="text" onChange={(e) => setSenha(e.target.value)} />
    <button onClick={handleButton} disabled={state.loading === true}>Enviar</button>
    <button onClick={handleButtonLogout}>Logout</button>
  </>)
}

export default LoginComp;