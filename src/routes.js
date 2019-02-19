export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('landing', {
      url: '/',
      component: 'landing'
    })
    .state('app', {
      url: '/app',
      component: 'app'
    })
    .state('chooseTemplate', {
      url: '/chooseTemplate',
      component: 'chooseTemplate'
    })
    .state('previewTemplate', {
      url: '/previewTemplate',
      component: 'previewTemplate'
    })
    .state('previewFrame', {
      url: '/previewFrame',
      component: 'previewFrame'
    })
    .state('customizePayload', {
      url: '/customizePayload',
      component: 'customizePayload'
    })
    .state('publish', {
      url: '/publish',
      component: 'publish'
    });
}
