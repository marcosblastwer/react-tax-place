import React, { Fragment, Dispatch, SetStateAction, useState } from 'react'

import Button from '../../components/shared/Button'
import LogoSvg from '../../assets/tax.svg'
import TextField from '../../components/shared/TextField'

import _validateEmail from '../../domain/validations/email'
import _validatePassword from '../../domain/validations/password'
import _validateUserName from '../../domain/validations/userName'

import { Field, Loading, Logo, Title } from './styles'

interface SignUpProps {
  nameState: {
    name: string
    setName: Dispatch<SetStateAction<string>>
  }
  emailState: {
    email: string
    setEmail: Dispatch<SetStateAction<string>>
  }
  passwordState: {
    password: string
    setPassword: Dispatch<SetStateAction<string>>
  }
  onSubmit(): void
}

const SignUp: React.FunctionComponent<SignUpProps> = ({ nameState, emailState, passwordState, onSubmit }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { name, setName } = nameState
  const { email, setEmail } = emailState
  const { password, setPassword } = passwordState

  const handleClick = () => {
    if (validateSignUp() && onSubmit) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        onSubmit()
      }, 1000)
    }
  }

  const validateSignUp = (): boolean => {
    const nameValidation = validateName()
    const emailValidation = validateEmail()
    const passwordValidation = validatePassword()

    return nameValidation.isValid
      && emailValidation.isValid
      && passwordValidation.isValid
  }

  const validateName = () => _validateUserName(name)
  
  const validateEmail = () => _validateEmail(email)
  
  const validatePassword = () => _validatePassword(password)

  return (
    <Fragment>
      <Logo src={LogoSvg} alt='Logotipo Tax Place' />
      <Title>Criar uma nova conta</Title>

      <Field>
        <TextField
          enabled={!loading}
          autoFocus={true}
          label='Nome completo'
          maxLength={255}
          value={name} 
          onChange={event => setName(event?.target?.value)}
          onValidate={validateName}
        />
      </Field>
      
      <Field>
        <TextField
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
        Continuar
      </Button>

      {
        loading && <Loading />
      }
    </Fragment>
  )
}

export default SignUp
