import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.96;
`
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 70vh;
`

export { Container, Content }
