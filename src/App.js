import React from 'react'

import Routes from './routes/index'

import GlobalStyle from './styles/GlobalStyles'
import Provider from './store'

function App() {
  return (
    <>
      <Provider>
        <GlobalStyle />
        <Routes />
      </Provider>
    </>
  )
}

export default App
