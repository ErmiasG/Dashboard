'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('LoginCtrl',['$rootScope', function ($rootScope) {
    $rootScope.logedIn = false;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
