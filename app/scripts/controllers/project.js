'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectCtrl', ['$rootScope', function ($rootScope)  {
    $rootScope.projectId = 1;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
