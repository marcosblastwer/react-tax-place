import React, {
  Dispatch,
  Fragment,
  MouseEvent,
  SetStateAction,
  useState
} from 'react';
import { useHistory } from 'react-router-dom'

import Button from '../../components/shared/Button'
import ButtonLink from '../../components/shared/ButtonLink'
import ModalMessage from '../../components/shared/ModalMessage'
import TextField from '../shared/TextField';

import _validateCpf from '../../domain/validations/cpf'
import _validateCrc from '../../domain/validations/crc'

import {
  Email, 
  Field,
  Loading,
  Spacer,
  Subtitle,
  Title,
  Username
} from './styles'

interface RegisterAccountantProps {
  name: string
  email: string
  documentIdState: {
    documentId: string
    setDocumentId: Dispatch<SetStateAction<string>>
  }
  documentAccountantState: {
    documentAccountant: string
    setDocumentAccountant: Dispatch<SetStateAction<string>>
  }
  onReset?(event: MouseEvent<HTMLButtonElement>): void
}

const RegisterAccountant: React.FunctionComponent<RegisterAccountantProps> = ({
  name,
  email,
  documentIdState,
  documentAccountantState,
  onReset
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [showRedirectMessage, setShowRedirectMessage] = useState<boolean>(false)
  const { documentId, setDocumentId } = documentIdState
  const { documentAccountant, setDocumentAccountant } = documentAccountantState
  const history = useHistory()

  const handleCloseMessage = () => {
    setShowRedirectMessage(false)
    history.push('/signin')
  }

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (validateRegisterAccountant()) {
      setLoading(true)
      
      setTimeout(() => {
        setLoading(false)
        setShowRedirectMessage(true)
      }, 2000)
    }
  }

  const validateDocumentId = () => _validateCpf(documentId)

  const validateDocumentAccountant = () => _validateCrc(documentAccountant)

  const validateRegisterAccountant = (): boolean => {
    const documentIdValidation = validateDocumentId()
    const documentAccountantValidation = validateDocumentAccountant()

    return documentIdValidation.isValid && documentAccountantValidation.isValid
  }

  return (
    <Fragment>
      <Title>Quase lá!</Title>
      <Subtitle>Complete seu cadastro de contador associado</Subtitle>

      <Username>{name}</Username>
      <Email>{email}</Email>

      <ButtonLink
        enabled={!loading}
        onClick={onReset}
      >
        Redefinir
      </ButtonLink>

      <Spacer />

      <Field>
        <TextField
          autoFocus={true}
          enabled={!loading}
          label='CPF'
          maxLength={14}
          value={documentId}
          onChange={event => setDocumentId(event?.target?.value)}
          onValidate={validateDocumentId}
        />
      </Field>

      <Field>
        <TextField
          enabled={!loading}
          label='Documento no conselho (CRC)'
          maxLength={13}
          value={documentAccountant}
          onChange={event => setDocumentAccountant(event?.target?.value)}
          onValidate={validateDocumentAccountant}
        />
      </Field>

      <Button 
        enabled={!loading}
        type='submit'
        onClick={handleSubmit}
      >
        Criar conta
      </Button>

      { loading && <Loading /> }

      <ModalMessage
        actions={<Button onClick={handleCloseMessage}>Ok</Button>}
        open={showRedirectMessage}
        title='Conta criada com sucesso'
      >
        Sua conta foi criada. Você será redirecionado para a tela de login, autentique-se para acessar o sistema.
      </ModalMessage>
    </Fragment>
  );
}

export default RegisterAccountant;
