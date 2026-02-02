import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Dashboard(){
const { state } = useContext(AuthContext)

if(!state.user){
  return <h2>Carregando usuário...</h2>
}

  return(<div>
    <h1>{state.user.name}</h1>
    <h1>{state.user.email}</h1>
  </div>)
}

export default Dashboard;