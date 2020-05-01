import React, { useState } from 'react'
import { FaReact } from 'react-icons/fa'

import useAuth from '../../store/Auth'
import { Container, Content, Title, SubmitButton } from './styles'

export default function Login() {
  const [loginUser, setLoginUser] = useState('')
  const [loginPwd, setLoginPass] = useState('')
  const { loading, signIn } = useAuth()

  const computed = () => {
    return loginUser && loginPwd
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signIn({ loginUser, loginPwd })
  }

  return (
    <>
      <Container>
        <Content>
          <Title>
            <FaReact size={30} color="#ccc" />
            <span>Context API With Hooks</span>
          </Title>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ENTER YOUR NAME"
              value={loginUser}
              onChange={(event) => setLoginUser(event.target.value)}
            />
            <input
              type="password"
              placeholder="PASSWORD (123)"
              value={loginPwd}
              onChange={(event) => setLoginPass(event.target.value)}
            />
            <SubmitButton disabled={!computed()}>
              {loading ? 'AGUARDE...' : 'LOGIN'}
            </SubmitButton>
          </form>
        </Content>
      </Container>
    </>
  )
}
