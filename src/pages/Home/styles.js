import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.96;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  max-width: 1000px;
`

export { Container, Content }
