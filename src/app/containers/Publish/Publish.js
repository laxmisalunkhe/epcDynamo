/* eslint-disable */

class PublishController {
  constructor($state) {
    this.$state = $state;
  }
}

export const Publish = {
  template: require('./Publish.html'),
  controller: PublishController
};
