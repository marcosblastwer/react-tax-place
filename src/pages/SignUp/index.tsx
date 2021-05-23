import React, { useState } from 'react'

import FormBox from '../../components/FormBox'
import SignUp from '../../components/SignUp'

const SignUpPage: React.FunctionComponent = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSignup = (): void => {
    alert('Chegou a requisição')
  }

  return (
    <FormBox>
      <SignUp
        nameState={{name, setName}}
        emailState={{email, setEmail}}
        passwordState={{password, setPassword}}
        onSubmit={handleSignup}
      />
    </FormBox>
  )
}

export default SignUpPage;
