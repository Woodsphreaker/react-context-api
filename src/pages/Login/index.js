import React, { useState } from 'react'
import { FaReact } from 'react-icons/fa'

import useAuth from '../../store/Auth'
import { Container, Content, Title, SubmitButton } from './styles'

export default function Login() {
  const [textInput, setTextInput] = useState('')
  const { user, token, loading, signIn } = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault()
    signIn()
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
              value={textInput}
              onChange={(event) => setTextInput(event.target.value)}
            />
            <SubmitButton disabled={!textInput}>
              {loading ? 'AGUARDE...' : 'LOGIN'}
            </SubmitButton>
            name: {user}
            token: {token}
          </form>
        </Content>
      </Container>
    </>
  )
}
