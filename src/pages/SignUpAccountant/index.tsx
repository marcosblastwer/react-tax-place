import React, { useState } from 'react'

import FormBox from '../../components/FormBox'
import RegisterAccountant from '../../components/RegisterAccountant'
import SignUp from '../../components/SignUp'

const SignUpAccountantPage: React.FunctionComponent = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [accountCreated, setAccountCreated] = useState<boolean>(false)

  const [documentId, setDocumentId] = useState<string>('')
  const [documentAccountant, setDocumentAccountant] = useState<string>('')  

  const handleSignUp = (): void => {
    setAccountCreated(true)
  }

  const handleSignUpReset = (): void => {
    setAccountCreated(false)
  }

  return (
    <FormBox>
      {
        accountCreated
        ? <RegisterAccountant 
            name={name}
            email={email}
            documentIdState={{documentId, setDocumentId}}
            documentAccountantState={{documentAccountant, setDocumentAccountant}}
            onReset={handleSignUpReset}
          />
        : <SignUp
            nameState={{name, setName}}
            emailState={{email, setEmail}}
            passwordState={{password, setPassword}}
            onSubmit={handleSignUp}
          />
      }
    </FormBox>
  )
}

export default SignUpAccountantPage
