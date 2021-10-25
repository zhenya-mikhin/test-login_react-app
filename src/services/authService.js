export const logIn = (login, password) => (
  new Promise((resolve, reject) => {
    if (login === 'developer21' && password === '123456') {
      resolve()
    } else {
      reject(new Error('Incorrect username or password.'))
    }
  })
)

export const authData = { login: 'developer21', password: '123456' }
