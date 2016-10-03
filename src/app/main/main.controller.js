(function() {
  'use strict';

  angular
    .module('company')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {

    var vm = this;


    vm.countries = [
      {name: 'Afghanistan'},
      {name: 'Aland Islands'},
      {name: 'Albania'},
      {name: 'Algeria'},
      {name: 'American Samoa'},
      {name: 'AndorrA'},
      {name: 'Angola'},
      {name: 'Anguilla'},
      {name: 'Antarctica'},
      {name: 'Antigua and Barbuda'},
      {name: 'Argentina'},
      {name: 'Armenia'},
      {name: 'Aruba'},
      {name: 'Australia'},
      {name: 'Austria'}];

  }
})();
