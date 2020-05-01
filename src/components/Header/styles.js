import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 5px 0;
  margin: 10px 0;
`
const Logo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 120px;
`

const Aside = styled.div`
  margin: 0 30px;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    height: 50px;
    padding-left: 30px;

    span {
      font-size: 18px;
      color: #fff;
      font-weight: bold;
    }

    svg {
      color: rgba(255, 255, 255, 0.5);
      margin-left: 20px;
      cursor: pointer;
    }
  }

  img {
    border-radius: 10px;
    height: 50px;
    margin: 0 30px;
  }
`

export { Container, Logo, Aside, Profile }
