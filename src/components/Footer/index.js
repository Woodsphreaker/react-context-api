import React from 'react'

import userCounter from '../../store/Counter'

import { Container, Content } from './styles'

export default function Footer() {
  const { counter } = userCounter()

  return (
    <>
      <Container>
        <Content>
          <p>
            React Context Api With Hooks By{' '}
            <strong>
              <a
                href="https://github.com/Woodsphreaker"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Woods
              </a>
            </strong>
          </p>
          <span>{counter}</span>
        </Content>
      </Container>
    </>
  )
}
