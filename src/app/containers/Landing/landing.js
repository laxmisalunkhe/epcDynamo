class LandingController {
  constructor($state) {
    this.$state = $state;
    this.filterA = true;
  }

  launchDynamo() {
    this.$state.go('app');
  }
}
export const Landing = {
  template: require('./Landing.html'),
  controller: LandingController
};
