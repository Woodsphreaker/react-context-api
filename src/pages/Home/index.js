import React from 'react'

import Header from '../../components/Header'
import Body from '../../components/Body'
import Footer from '../../components/Footer'

import { Container, Content } from './styles'

export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <Header />
          <Body />
          <Footer />
        </Content>
      </Container>
    </>
  )
}
