import * as React from 'react';
import * as styles from './styles.css';
import { inject, observer } from 'mobx-react';
import { STORE_UI } from '../../constants/stores';

@inject(STORE_UI)
@observer
export class Header extends React.Component {
  render() {
    const uiStore = this.props[STORE_UI];

    return (
      <div className={styles.header}>
        <button className={styles.buttonIncrement} onClick={() => uiStore.increment(5)}>Start</button>
        <button className={styles.buttonDecrement} onClick={() => uiStore.stop()}>Stop</button>
      </div>
    );
  }
}