/* eslint-disable */
class PreviewTemplateController {
  constructor($state, $sce) {
    this.$state = $state;
    this.$sce = $sce;
    this.currentProjectUrl = 'http://localhost:3000/template.html';
  }
}

export const PreviewTemplate = {
  template: require('./PreviewTemplate.html'),
  controller: PreviewTemplateController
};
