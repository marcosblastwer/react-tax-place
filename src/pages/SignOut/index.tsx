import React, { useEffect } from 'react'

import { useAuth } from '../../domain/contexts/auth'

const SignOutPage: React.FunctionComponent = () => {
  const auth = useAuth()
  
  useEffect(() => {
    auth.signOut()
  })

  return (
    <span>Saindo...</span>
  )
}

export default SignOutPage;
