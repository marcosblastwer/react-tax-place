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

import _validateCnpj from '../../domain/validations/cnpj'

import {
  Email,
  Field,
  Loading,
  Spacer,
  Subtitle,
  Title,
  Username
} from './styles'

interface Props {
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

const RegisterCompany: React.FunctionComponent<Props> = ({
  name,
  email,
  documentIdState,
  onReset
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [showRedirectMessage, setShowRedirectMessage] = useState<boolean>(false)
  const { documentId, setDocumentId } = documentIdState
  const history = useHistory()

  const handleCloseMessage = () => {
    setShowRedirectMessage(false)
    history.push('/signin')
  }

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (validateRegisterCompany()) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        setShowRedirectMessage(true)
      }, 2000)
    }
  }

  const validateDocumentId = () => _validateCnpj(documentId)

  const validateRegisterCompany = (): boolean => {
    const documentIdValidation = validateDocumentId()

    return documentIdValidation.isValid
  }

  return (
    <Fragment>
      <Title>Quase lá!</Title>
      <Subtitle>Complete seu cadastro</Subtitle>

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
          label='CNPJ'
          maxLength={18}
          value={documentId}
          onChange={event => setDocumentId(event?.target?.value)}
          onValidate={validateDocumentId}
        />
      </Field>

      <Button
        enabled={!loading}
        type='submit'
        onClick={handleSubmit}
      >
        Criar conta
      </Button>

      { loading && <Loading />}

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

export default RegisterCompany;
