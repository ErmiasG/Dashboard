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
    this.projects = [
      'Project1',
      'Project2',
      'Project3',
      'Project4',
      'Project5',
      'Project6',
      'Project7',
      'Project8',
      'Project9',
      'Project10',
      'Project11',
      'Project12'
    ];
//    growl.success('This is a test for success.', {title: 'Success', ttl: 500, referenceId: 1});
//    growl.error('This is a test for error.', {title: 'Error', ttl: 500, referenceId: 1});
//    growl.warning('I am the warning message', {title: 'Warning', ttl: 500, referenceId: 1});
  }]);
