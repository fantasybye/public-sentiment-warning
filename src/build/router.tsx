import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { routes } from '../constants';

const Router = () => (
  <HashRouter>
    <Switch>
      {routes.map((route) => (
        <Route exact key={route.key} path={route.path} component={route.component}/>
      ))}
    </Switch>
  </HashRouter>
);

export { Router };