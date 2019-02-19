/* eslint-disable */
class PreviewFrameController {
  constructor($state, $sce) {
    this.$state = $state;
    this.$sce = $sce;
  }
}

export const PreviewFrame = {
  template: require('./PreviewFrame.html'),
  controller: PreviewFrameController
};
