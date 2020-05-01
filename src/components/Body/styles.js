import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 150px;
    color: #999;
    margin: 30px 0;
    padding: 0;
  }
`
const Description = styled.p`
  font-size: 18px;
  color: #999;
`

const Controls = styled.div`
  display: flex;
  flex-direction: row;
`
const Button = styled.button`
  margin: 0 20px;
  padding: 0;
  height: 60px;
  width: 60px;
  border: none;
  border-radius: 5px;
  font-size: 40px;
  background-color: ${(props) => props.color || '#ccc'};
  transition: background 0.4s;

  &:hover {
    background-color: #ccc;
  }
`

export { Container, Content, Description, Controls, Button }
