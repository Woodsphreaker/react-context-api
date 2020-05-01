import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  margin: 20px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  p {
    font-size: 18px;
    color: #fff;
  }

  span {
    color: #999;
    font-size: 18px;
    margin: 10px 0;
  }
`

export { Container, Content }
