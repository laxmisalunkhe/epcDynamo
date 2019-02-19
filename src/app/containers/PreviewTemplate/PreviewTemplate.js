/* eslint-disable */
class PreviewTemplateController {
  constructor($state, $sce, $uibModal) {
    this.$state = $state;
    this.$sce = $sce;
    this.$uibModal = $uibModal;
    this.currentProjectUrl = 'http://localhost:3000/template.html';
  }

  useTemplate() {
    this.$state.go('customizePayload');
  }

  customizePayload() {
  }
  
}

export const PreviewTemplate = {
  template: require('./PreviewTemplate.html'),
  controller: PreviewTemplateController
};
