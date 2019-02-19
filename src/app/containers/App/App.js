/* eslint-disable */
class AppController {
  constructor($state) {
    this.$state = $state;
    this.filter = true;
    this.selected = undefined;
  }

  submit() {
    this.$state.go('chooseTemplate');
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
