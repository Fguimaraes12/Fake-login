import { useContext, useReducer } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/loginPage"
import UserPage from "./pages/userPage"
import PrivateRoute from "./routes/privateRoute"
import { LoginContext } from "./context/loginContext"


function App() {
const {states: {state}} = useContext(LoginContext)

  return (
  <Routes>
      <Route path="/" element={
        state.isAuth
        ? <Navigate to="/user"/>
        : <Navigate to="/login"/>
      }/>

      <Route path="/login" element={
        state.isAuth
        ? <Navigate to="/user"/>
        : <LoginPage/>
      }/>

      <Route path="/user" element={
        <PrivateRoute>
          <UserPage/>
        </PrivateRoute>
      }/>

  </Routes>
  )
}

export default App
