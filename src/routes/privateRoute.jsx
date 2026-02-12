import { useContext } from "react";
import { LoginContext } from "../contexts/loginContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
const {states: {state} } = useContext(LoginContext)

if(!state.isLogged){
  return <Navigate to="/login"/>
}
return children

}

export default PrivateRoute;