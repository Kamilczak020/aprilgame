import * as React from 'react';
import * as styles from './styles.css';
import { inject, observer } from 'mobx-react';
import { STORE_UI } from '../../constants/stores';

@inject(STORE_UI)
@observer
export class Display extends React.Component {
  render() {
    const uiStore = this.props[STORE_UI];

    return (
      <div className={styles.display}>
        <h1>{uiStore.counter}</h1>
      </div>
    );
  }
}