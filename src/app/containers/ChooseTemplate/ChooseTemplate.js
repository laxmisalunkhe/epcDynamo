/* eslint-disable */
class ChooseTemplateController {
  constructor($state) {
    this.$state = $state;
  }

  submit() {
    this.$state.go('previewTemplate');
  }
}

export const ChooseTemplate = {
  template: require('./ChooseTemplate.html'),
  controller: ChooseTemplateController
};
