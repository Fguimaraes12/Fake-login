import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
const {states: {state} } = useContext(LoginContext)

if(!state.isAuth){
  return <Navigate to="/login"/>
}
return children

}

export default PrivateRoute;