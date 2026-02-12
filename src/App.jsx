
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginContext } from "./contexts/loginContext";
import PrivateRoute from "./routes/privateRoute";

import LoginPage from "./pages/loginPage";
import UserPage from "./pages/userPage";

function App() {
  const {
    states: { state },
  } = useContext(LoginContext);

  // É bom verificar se o estado de carregamento do user já terminou 
  // antes de decidir para onde mandar o usuário.

  return (
    <Routes>
      {/* Rota Raiz: Redireciona dependendo do status de login */}
      <Route 
        path="/" 
        element={state.isLogged ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} 
      />

      {/* Rota Pública */}
      <Route 
        path="/login" 
        element={state.isLogged ? <Navigate to="/dashboard"/> : <LoginPage /> } 
      />

      {/* Rota Privada */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <UserPage/>
          </PrivateRoute>
        }
      />

      {/* Fallback para rotas não encontradas */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
