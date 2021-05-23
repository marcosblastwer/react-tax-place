import Validation from './validation'

const validatePassword = (password: string): Validation => {
  if (!password)
    return new Validation('Informe a senha.')

  if (password.length < 6)
    return new Validation('A senha deve ter ao menos 6 caracteres.')

  return new Validation()
}

export default validatePassword
