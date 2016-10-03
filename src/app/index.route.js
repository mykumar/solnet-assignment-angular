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
     .state('app.timemng', {
        url: '/timemng',
        templateUrl: 'app/components/timeMng/timemng.html'
      })
     .state('app.inbox', {
        url: '/inbox',
        templateUrl: 'app/components/inbox/inbox.html'
      })
     .state('app.calendar', {
        url: '/calendar',
        templateUrl: 'app/components/calendar/calendar.html'
      })
     .state('app.analytics', {
        url: '/analytics',
        templateUrl: 'app/components/analytics/analytics.html'
      })
     .state('app.settings', {
        url: '/settings',
        templateUrl: 'app/components/settings/settings.html'
      });
  }

})();
