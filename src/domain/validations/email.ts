import validator from 'validator'

import Validation from './validation'

const validateEmail = (email: string): Validation => {
  if (!validator.isEmail(email))
    return new Validation('E-mail inválido.')
    
  return new Validation()
}

export default validateEmail
