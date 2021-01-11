import { Subscription } from 'rxjs';

export class MainClass {
  watcherList: Subscription[] = [];

  watch(sub) {
    this.watcherList.push(sub);
  }

  watcherDestroy() {
    this.watcherList.map(w => {
      try {
        w.unsubscribe();
      } catch (err) {}
    });
  }

  trackBy(key) {
    return function(index, value) {
      return value[key];
    };
  }
}
