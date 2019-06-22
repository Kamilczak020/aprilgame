import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { AppPage } from './containers';
import { Root } from './containers/Root';
import { RouterStore } from './stores';
import { STORE_ROUTER } from './constants/stores';

const history = createBrowserHistory();
const routerStore = new RouterStore(history);

const rootStores = {
  [STORE_ROUTER]: routerStore,
};

// Render React DOM
ReactDOM.render(
  <Provider {...rootStores}>
    <Root>
      <Router history={history}>
        <Switch>
          <Route path="/" component={AppPage} />
        </Switch>
      </Router>
    </Root>
  </Provider>,
  document.getElementById('root')
);