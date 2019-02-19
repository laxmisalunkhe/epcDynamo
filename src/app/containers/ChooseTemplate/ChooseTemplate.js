/* eslint-disable */
class ChooseTemplateController {
  constructor($uibModal, $state) {
    this.$state = $state;
    this.$uibModal = $uibModal;
  }

  submit() {
    this.$state.go('previewTemplate');
  }
  
  showPreviewNotificationModal() {
    this.$state.go('previewTemplate');    
  }
}

export const ChooseTemplate = {
  template: require('./ChooseTemplate.html'),
  controller: ChooseTemplateController
};
