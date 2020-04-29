import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SecuredRoutes from './RouteWrapper'

// Pages
import Login from '../pages/Login'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <SecuredRoutes path="/home" exact component={Home} />
    </Switch>
  )
}

export default Routes
