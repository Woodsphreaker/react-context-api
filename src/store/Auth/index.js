import React, { createContext, useContext, useState } from 'react'
import propTypes from 'prop-types'
import { toast } from 'react-toastify'

import history from '../../services/history'
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

  const signinSuccess = (result) => {
    setUser(result.name)
    setToken(result.token)
    setSigned(true)
    toast.success(
      `Olá ${user}, seu login foi efetuado com sucesso e você será redirecionado em instantes`
    )
    setTimeout(history.push, 3000, '/home')
  }

  const signIn = async ({ loginUser, loginPwd }) => {
    setLoading(true)

    try {
      const result = await siginService({ loginUser, loginPwd })
      const { error, message } = result

      if (error) {
        setLoading(false)
        return toast.error(message)
      }

      return signinSuccess(result)
    } catch (error) {
      setSigned(false)
      setLoading(false)
      return false
    }
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
