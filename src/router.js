import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import BaseLayout from './layouts/BaseLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={BaseLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
