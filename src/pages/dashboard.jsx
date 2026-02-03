import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Dashboard(){
const { state } = useContext(AuthContext)

if(!state.user){
  return <h2>Carregando usuário...</h2>
}

  return(<div>    
    <h1>Username: {state.user.username}</h1>
    <p>Name: {state.user.firstName} {state.user.lastName}</p>
    <p>Email: {state.user.email}</p>
    <p>Gender: {state.user.gender}</p>
  </div>)
}

export default Dashboard;