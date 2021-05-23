import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import ErrorPage from '../pages/Error'
import HomePage from '../pages/Home'
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'
import SignUpAccountantPage from '../pages/SignUpAccountant'

const AppRoutes: React.FunctionComponent = () => (
  <Switch>
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/signin" component={SignInPage} />
    <Route exact path="/signup" component={SignUpPage} />
    <Route exact path="/signup-accountant" component={SignUpAccountantPage} />
    <Route exact path="/" component={HomePage} />
    <Redirect path="/app" to="/signin" />
    <Route path="/" component={ErrorPage} />
  </Switch>
)

export default AppRoutes
