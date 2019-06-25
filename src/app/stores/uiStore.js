import { action, observable } from 'mobx';

export class UIStore {
  @observable counter = 0;

  @observable incrementValue = 1;

  @action
  increment(value) {
    this.incrementValue += value;
  }

  @action
  stop() {
    clearInterval(this.interval);
  }

  @action
  start() {
    this.interval = setInterval(() => this.stuffThatHappensOnTick(), 200)
  }

  stuffThatHappensOnTick() {
    this.counter += this.incrementValue;

    if (this.counter === 50) {
      this.incrementValue = 10;
    }

  }

  constructor() {
    this.start();
  }
}