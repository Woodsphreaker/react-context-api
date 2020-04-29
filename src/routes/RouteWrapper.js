import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import useAuth from '../store/Auth'

const RouterWrapper = ({ component: Component, ...rest }) => {
  const { signed } = useAuth()

  if (!signed) {
    return <Redirect to="/" />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default RouterWrapper

RouterWrapper.propTypes = {
  component: PropTypes.oneOf([PropTypes.element, PropTypes.func]).isRequired,
}
