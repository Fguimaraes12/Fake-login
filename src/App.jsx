import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

import LoginComp from "./pages/loginComp";
import Dashboard from "./pages/dashboard";

function App() {
  const { state } = useContext(AuthContext);

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
        element={state.isLogged ? <Navigate to="/dashboard"/> : <LoginComp /> } 
      />

      {/* Rota Privada */}
      <Route
        path="/dashboard"
        element={state.isLogged ? <Dashboard /> : <Navigate replace to="/login" />}
      />

      {/* Fallback para rotas não encontradas */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;