(function() {
  'use strict';

  angular
    .module('company')
    .run(runBlock);

  runBlock.inject = ['$log'];
  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
