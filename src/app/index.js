import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { AppPage } from './containers';
import { Root } from './containers/Root';
import { RouterStore, UIStore } from './stores';
import { STORE_ROUTER, STORE_UI } from './constants/stores';

const history = createBrowserHistory();
const routerStore = new RouterStore(history);
const uiStore = new UIStore();

const rootStores = {
  [STORE_ROUTER]: routerStore,
  [STORE_UI]: uiStore
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