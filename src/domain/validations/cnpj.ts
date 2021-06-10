import { cnpj as cnpjValidator } from 'cpf-cnpj-validator'

import Validation from './validation'

const validateCpf = (cnpj: string): Validation => {
  if (!cnpjValidator.isValid(cnpj))
    return new Validation('CNPJ inválido.')

  return new Validation()
}

export default validateCpf
