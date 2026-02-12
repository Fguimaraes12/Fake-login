import {  createContext, useReducer } from "react";
import {Reducer, initialState} from "../reducers/reducer";



export const AuthContext = createContext()


function AuthProvider ({children}){
const [state, dispatch] = useReducer(Reducer, initialState)


  return(
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;