import React from 'react'
import { Router } from 'react-router-dom'

import history from './services/history'
import Routes from './routes/index'
import GlobalStyle from './styles/GlobalStyles'
import Provider from './store'

function App() {
  return (
    <>
      <Provider>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
      </Provider>
    </>
  )
}

export default App
