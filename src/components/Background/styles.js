import styled from 'styled-components'

import bgimage from '../../assets/images/hooks-bg.png'

const Container = styled.div`
  background-image: ${`url(${bgimage})`};
  background-size: cover;
  background-position: top;
  height: 100%;
  width: 100%;
  position: fixed;
  opacity: 0.5;
`
export { Container }
