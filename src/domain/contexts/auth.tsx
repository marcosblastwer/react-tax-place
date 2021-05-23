import React, { createContext, useState, useEffect, useContext } from 'react'

import User from '../models/User'
// import * as api from '../services/api'

interface AuthContextData {
  activeAccount: boolean
  signed: boolean
  user: User | null
  signIn(email: string, password: string): boolean
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user')
    // const storagedToken = sessionStorage.getItem('@App:token')

    // if (storagedToken && storagedUser) {
    if (storagedUser) {
      setUser(JSON.parse(storagedUser))
      // api.defaults.headers.Authorization = `Bearer ${storagedToken}`
    }
  }, [])

  function signIn(email: string, password: string): boolean {
    if (email === 'marcos@teste.com' && password === '123456') {
      const loggedUser: User = {
        name: 'Marcos Carvalho',
        email
      }
      sessionStorage.setItem('@App:user', JSON.stringify(loggedUser))
      setUser(loggedUser)

      return true
    }
    return false

    // const response = await api.post('https://localhost:3000', user)

    // setUser(response.data.user)
    // api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    // sessionStorage.setItem('@App:user', JSON.stringify(response.data.user))
    // sessionStorage.setItem('@App:token', response.data.token)
  }

  function signOut() {
    sessionStorage.removeItem('@App:user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ activeAccount: false, signed: Boolean(user), user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}
