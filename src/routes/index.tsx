import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AuthRoutes from './auth.routes'
import StaticRoutes from './static.routes'
import { useAuth } from '../domain/contexts/auth'

const Routes: React.FunctionComponent = () => {
  const auth = useAuth()
  const { signed } = auth

  return (
    <BrowserRouter>
      { signed ? <AuthRoutes /> : <StaticRoutes /> }
    </BrowserRouter>
  )
}

export default Routes
