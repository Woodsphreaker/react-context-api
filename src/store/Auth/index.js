import React, { createContext, useContext, useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { toast } from 'react-toastify'
import { getStorage, setStorage } from '../../services/storage'
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

  useEffect(() => {
    const storageUserData = getStorage('user')
    if (storageUserData) {
      setUser(storageUserData.name)
      setToken(storageUserData.token)
      setSigned(true)
      history.push('/home')
    }
  }, [])

  const signinSuccess = result => {
    setUser(result.name)
    setToken(result.token)
    setSigned(true)

    setStorage('user', { ...result })

    toast.success(
      `Olá ${
        result.name
      }, seu login foi efetuado com sucesso e você será redirecionado em instantes`,
      {
        onClose: () => {
          history.push('/home')
          setLoading(false)
        },
      }
    )
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

  const logoff = () => {
    setStorage('user', '')
    setSigned(false)
  }

  return (
    <AuthContext.Provider
      value={{ user, token, signed, loading, signIn, logoff }}
    >
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
