import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Header } from '../../components/header';
import { STORE_ROUTER } from '../../constants/stores';
import * as styles from './styles.css';

@inject(STORE_ROUTER)
@observer
export class AppPage extends React.Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <Header />
          <div className={styles.contentContainer}>
            <h1>sdasdasdadas</h1>
          </div>
      </div>
    );
  }
}