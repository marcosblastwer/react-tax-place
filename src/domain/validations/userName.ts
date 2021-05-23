import Validation from './validation'

const validateUserName = (name: string | undefined | null): Validation => {
  if (!name) 
    return new Validation('Informe o nome completo.')

  if (name.length < 3)
    return new Validation('Nome inválido, deve ter ao menos 3 caracteres.')

  const splitted = name.split(' ')
  if (splitted.length <= 1)
    return new Validation('Informe o nome e sobrenome.')

  return new Validation()
}

export default validateUserName
