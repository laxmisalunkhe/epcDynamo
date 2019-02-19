/* eslint-disable */
import mockInitData  from '../../mock/dataFactory'

class AppController {
  constructor($state) {
    this.$state = $state;
    this.filter = true;
    this.selected = undefined;
    this.mockInitData = mockInitData;
  }

  submit() {
    this.$state.go('chooseTemplate');
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
