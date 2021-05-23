import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import AccountStatusPage from '../pages/AccountStatus'
import AppHomePage from '../pages/AppHome'
import ErrorPage from '../pages/Error'
import SignOutPage from '../pages/SignOut'

import { useAuth } from '../domain/contexts/auth'

const AppRoutes: React.FunctionComponent = () => {
  const { path } = useRouteMatch()
  const auth = useAuth()
  
  return (
    <Switch>
      <Route exact path={`${path}`} render={() => {
        if (auth.activeAccount)
          return <AppHomePage />

        return <AccountStatusPage />
      }} />

      <Route exact path={`${path}/account-status`} component={AccountStatusPage} />
      <Route exact path={`${path}/signout`} component={SignOutPage} />
      <Route path={`${path}`} component={ErrorPage} />
    </Switch>
  )
}

export default AppRoutes
