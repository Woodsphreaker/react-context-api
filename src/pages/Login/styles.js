import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  padding: 20px;
  opacity: 0.96;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 7px;
  text-align: center;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);

  span {
    font-size: 25px;
    color: #999;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;

    input {
      height: 50px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      margin: 20px 0;
      padding: 10px;
      font-size: 18px;
      color: #999;

      &::placeholder {
        color: #999;
      }
    }
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  svg {
    margin-right: 10px;
  }
`

const SubmitButton = styled.button.attrs(props => {
  return {
    type: 'submit',
  }
})`
  height: 50px;
  margin: 0 0 0 0;
  border: none;
  border-radius: 5px;
  background: ${props => (props.disabled ? '#ccc' : '#3b93ff')};
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.3s;

  &:hover {
    background: ${props => (props.disabled ? '#ccc' : '#215ea9')};
  }
`

export { Container, Content, Title, SubmitButton }
