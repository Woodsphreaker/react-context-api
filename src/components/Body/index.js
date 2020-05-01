import React from 'react'

import userCounter from '../../store/Counter'
import { Container, Content, Description, Controls, Button } from './styles'

export default function Body() {
  const { counter, increment, decrement } = userCounter()

  return (
    <>
      <Container>
        <Content>
          <Description>
            This is a simple example of using
            <strong> React Context Api and Hooks </strong>
            for sharing global state between many components
          </Description>
          <span>{counter}</span>
          <Controls>
            <Button onClick={decrement} color="#a70000">
              -
            </Button>
            <Button onClick={increment} color="#009a0c">
              +
            </Button>
          </Controls>
        </Content>
      </Container>
    </>
  )
}
