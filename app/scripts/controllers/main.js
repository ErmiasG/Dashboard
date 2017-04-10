'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('MainCtrl',['$rootScope','growl', function ($rootScope, growl) {
    $rootScope.logedIn = true;
    $rootScope.projectId = 0;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    growl.success("This is a test for success.", {title: 'Success', ttl: 500, referenceId: 1});
    growl.error("This is a test for error.", {title: 'Error', ttl: 500, referenceId: 1});
    growl.warning("I'm the warning message", {title: 'Warning', ttl: 500, referenceId: 1});
  }]);
