import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Dashboard(){
const { state } = useContext(AuthContext)

if(!state.user){
  return <h2>Carregando usuário...</h2>
}

  return(<div>
    <h1>Name: {state.user.name}</h1>
    <h1>Email: {state.user.email}</h1>
    <p>Bio: {state.user.biografia}</p>
  </div>)
}

export default Dashboard;