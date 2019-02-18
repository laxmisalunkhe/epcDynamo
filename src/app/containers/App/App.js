
class AppController {
  constructor() {
    this.filter = true;
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
