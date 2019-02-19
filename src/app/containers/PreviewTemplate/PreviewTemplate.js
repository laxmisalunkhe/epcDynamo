/* eslint-disable */
class PreviewTemplateController {
  constructor($state) {
    this.$state = $state;
  }
}

export const PreviewTemplate = {
  template: require('./PreviewTemplate.html'),
  controller: PreviewTemplateController
};
