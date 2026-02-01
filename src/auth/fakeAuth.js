export function fakeLogin({ gmail, senha }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // credenciais válidas (mock)
      const validUser = {
        gmail: "asd",
        senha: "123"
      }

      if (gmail === validUser.gmail && senha === validUser.senha) {
        resolve({
          id: 1,
          name: "Usuário Teste",
          gmail
        })
      } else {
        reject(new Error("Email ou senha inválidos"))
      }
    }, 1500) // simula delay da API
  })
}



