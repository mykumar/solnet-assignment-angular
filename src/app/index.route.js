(function() {
  'use strict';

  angular
    .module('company')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/app/dashboard');

    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
     .state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/components/dashBoard/dashboard.html',
        controller: 'DashBoardController',
        controllerAs: 'DashBoard'
      })
     .state('app.blank', {
        url: '/blank',
        templateUrl: 'app/components/blank/blank.html'
      });
  }

})();
