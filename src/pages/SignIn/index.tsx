import React, { useState } from 'react'

import { useAuth } from '../../domain/contexts/auth'
import Button from '../../components/shared/Button'
import FormBox from '../../components/FormBox'
import LogoSvg from '../../assets/tax.svg'
import ModalMessage from '../../components/shared/ModalMessage'
import TextField from '../../components/shared/TextField'
import Validation from '../../domain/validations/validation'
import _validateEmail from '../../domain/validations/email'

import { Field, Loading, Logo, Title } from './styles'

const SignInPage: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
  const auth = useAuth()

  const handleClick = () => {
    if (validateSignIn()) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)

        if (!auth.signIn(email, password))
          setShowErrorMessage(true)
      }, 1000)
    }
  }

  const handleCloseMessage = () => {
    setShowErrorMessage(false)
  }

  const validateSignIn = (): boolean => {
    const emailValidation = validateEmail()
    const passwordValidation = validatePassword()

    return emailValidation.isValid && passwordValidation.isValid
  }

  const validateEmail = () => _validateEmail(email)
  
  const validatePassword = () => {
    if (!password)
      return new Validation('Informe sua senha')

    return new Validation()
  }

  return (
    <FormBox>
      <Logo src={LogoSvg} alt='Logotipo Tax Place' />
      <Title>Fazer login</Title>

      <Field>
        <TextField
          autoFocus={true}
          enabled={!loading}
          label='E-mail' 
          maxLength={255}
          type='email'          
          value={email} 
          onChange={event => setEmail(event?.target?.value)}
          onValidate={validateEmail}
        />
      </Field>

      <Field>
        <TextField
          enabled={!loading}
          label='Senha' 
          maxLength={255}
          type='password'
          value={password} 
          onChange={event => setPassword(event?.target?.value)}
          onValidate={validatePassword}
        />
      </Field>
      
      <Button 
        enabled={!loading}
        type='submit'
        onClick={handleClick}
      >
        Entrar
      </Button>

      {
        loading && <Loading />
      }

      <ModalMessage
        actions={<Button onClick={handleCloseMessage}>Ok</Button>}
        open={showErrorMessage}
        title='Falha na autenticação'
      >
        O e-mail ou a senha são inválidos.
      </ModalMessage>
    </FormBox>
  )
}

export default SignInPage
