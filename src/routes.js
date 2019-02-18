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
    });
}
