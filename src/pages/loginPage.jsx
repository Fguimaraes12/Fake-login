import { LoginContext } from "../context/loginContext";
import { useContext } from "react";

function LoginPage (){
const {
   functions: {handleButton, handlePassword, handleUsername},
   states: {state, username, password },
} = useContext(LoginContext)

const handleSubmit = (e) => {
  e.preventDefault()
  handleButton()
}

  return (
  <div>
    <h1>Login</h1>

     <form onSubmit={handleSubmit}>
       {state.error && <h1>{state.error}</h1>}

       <label htmlFor="username">Username</label>
       <input 
         type="text" 
         value={username} 
         onChange={handleUsername} 
         id="username"
        />

       <label htmlFor="password">Password</label>
       <input type="text" 
         value={password} 
         onChange={handlePassword}
         id="password"
       />

       <button 
        type="submit"
        disabled={state.isLoading === true}>Enviar</button>
     </form>
    
  </div>
  )
}
export default LoginPage;