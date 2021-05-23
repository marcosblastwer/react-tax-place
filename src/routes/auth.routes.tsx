import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import AppPage from '../pages/App'

const AppRoutes: React.FunctionComponent = () => (
  <Switch>
    <Route path='/app' component={AppPage} />
    <Redirect path='/' to='/app' />
  </Switch>
)

export default AppRoutes
