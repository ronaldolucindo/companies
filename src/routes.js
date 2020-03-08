import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const CompanyList = lazy(() => import('./pages/company-list'));

function Routes(props) {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={props => <CompanyList {...props} />}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Routes;
