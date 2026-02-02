export function fakeLogin({ email, senha }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // credenciais válidas (mock)
      const validUser = {
        email: "teste@gmail.com",
        senha: "123"
      }

      if (email === validUser.email && senha === validUser.senha) {
        resolve({
          id: 1,
          name: "Usuário Teste",
          email,
          biografia: "Amantes de jogos e livros, gamer e leitor apaixonado... "
        })
      } else {
        reject(new Error("Email ou senha inválidos"))
      }
    }, 1500) // simula delay da API
  })
}



