/* eslint-disable */
class ChooseTemplateController {
  constructor($uibModal, $state) {
    this.$state = $state;
    this.$uibModal = $uibModal;
  }

  submit() {
    this.$state.go('previewTemplate');
  }

  showPreviewNotificationModal(size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = this.$uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return [];
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      this.selected = selectedItem;
    }, function () {
    });
  }
}

export const ChooseTemplate = {
  template: require('./ChooseTemplate.html'),
  controller: ChooseTemplateController
};
