import "./loginPage.scss";

import { LoginContext } from "../contexts/loginContext";
import { useContext } from "react";


function LoginPage() {
  const {
    functions: { handleButton, handlePassword, handleUsername },
    states: { state, username, password },
  } = useContext(LoginContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleButton()
  }



  return (
    <div className="login-container">
      <div className="login-card">

        <div className="form-container">

          <form onSubmit={handleSubmit} className="login-form">
            <p>Sign in to your count</p>
            {state.error && <h1>{state.error}</h1>}

            <input
              type="text"
              value={username}
              onChange={handleUsername}
              id="username"
              placeholder="User"
            />

            <input type="password"
              value={password}
              onChange={handlePassword}
              id="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="submit-btn"
              disabled={state.loading === true}>
              <span>Continue</span>
            </button>


            <div className="login-card__social">
              <div className="login-card__social-divider">
                <span>Or continue with</span>
              </div>
              <div className="login-card__social-icons">
                <button type="button" className="social-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </button>
                <button type="button" className="social-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
                    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z" />
                    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </form>
        </div>


      </div>
    </div>
  )
}
export default LoginPage;