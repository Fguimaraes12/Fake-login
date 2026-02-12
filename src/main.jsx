import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import { LoginProvider } from "./contexts/loginContext.jsx"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </BrowserRouter>
  </StrictMode>,
)
