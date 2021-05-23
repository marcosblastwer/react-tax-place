import Validation from './validation'

const validateCrc = (crc: string): Validation => {
  if (!crc)
    return new Validation('Informe o documento no conselho (CRC).')

  if (crc.length !== 13)
    return new Validation('Documento CRC inválido.')

  return new Validation()
}

export default validateCrc
