'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:MessageCtrl
 * @description
 * # MessageCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('MessageCtrl', ['$rootScope', function ($rootScope) {
    $rootScope.logedIn = true;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
