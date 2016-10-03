(function() {
  'use strict';

  angular
    .module('company')
    .directive('includeReplace', includeReplace);

  /** @ngInject */
  function includeReplace() {
    return {
        require: 'ngInclude',
        restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
  }

})();
