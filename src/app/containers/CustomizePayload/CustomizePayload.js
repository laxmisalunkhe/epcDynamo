/* eslint-disable */
import {mockInitData}  from '../../mock/dataFactory'

class CustomizePayloadController {
  constructor($state) {
    this.$state = $state;
    this.filter = true;
    this.selected = undefined;
    this.mockInitData = mockInitData;
    this.apiConfigs = this.mockInitData.APIList;
  }

  startCustomizePayload() {
    this.customizePayload = true;
  }

  submit() {
    this.$state.go('publish');
  }

  continueSelected() {
    this.$state.go('publish');
  }
}

export const CustomizePayload = {
  template: require('./CustomizePayload.html'),
  controller: CustomizePayloadController
};
