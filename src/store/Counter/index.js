import React, { createContext, useContext, useState } from 'react'
import propTypes from 'prop-types'

const INITIAL_VALUE = {
  counter: 0,
}

const CounterContext = createContext(INITIAL_VALUE)

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    return setCounter(counter + 1)
  }

  const decrement = () => {
    if (counter - 1 < 0) {
      return counter
    }

    return setCounter(counter - 1)
  }

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}

const useCounter = () => useContext(CounterContext)

export default useCounter

CounterProvider.propTypes = {
  children: propTypes.node,
}

CounterProvider.defaultProps = {
  children: propTypes.node,
}
