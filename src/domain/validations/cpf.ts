import { cpf as cpfValidator } from 'cpf-cnpj-validator'

import Validation from './validation'

const validateCpf = (cpf: string): Validation => {
  if (!cpfValidator.isValid(cpf))
    return new Validation('CPF inválido.')

  return new Validation()
}

export default validateCpf
