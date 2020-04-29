import React, { createContext } from 'react'
import propTypes from 'prop-types'

import rootContext from './rootContext'

const RootProvider = createContext()

const combineProviders = (providers, children) => {
  const [Provider] = providers

  if (!Provider) {
    return children
  }

  return <Provider>{combineProviders(providers.slice(1), children)}</Provider>
}

const Provider = ({ children }) => {
  return (
    <RootProvider.Provider testProp={123}>
      {combineProviders(rootContext, children)}
    </RootProvider.Provider>
  )
}

export default Provider

Provider.propTypes = {
  children: propTypes.node,
}

Provider.defaultProps = {
  children: propTypes.node,
}
