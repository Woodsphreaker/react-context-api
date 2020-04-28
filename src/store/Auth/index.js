import React, { createContext, useContext, useState } from 'react'
import propTypes from 'prop-types'

import siginService from '../../services/signin'

const INITIAL_VALUE = {
  user: '',
  token: '',
  signed: '',
}

const AuthContext = createContext(INITIAL_VALUE)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [token, setToken] = useState('')
  const [signed, setSigned] = useState(false)
  const [loading, setLoading] = useState(false)

  const signIn = async () => {
    setLoading(true)
    const result = await siginService()
    setUser(result.name)
    setToken(result.token)
    setSigned(true)
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ user, token, signed, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export default useAuth

AuthProvider.propTypes = {
  children: propTypes.node,
}

AuthProvider.defaultProps = {
  children: propTypes.node,
}
