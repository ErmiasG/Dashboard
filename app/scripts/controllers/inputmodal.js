'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:InputmodalCtrl
 * @description
 * # InputmodalCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('InputmodalCtrl', ['$uibModalInstance',  'title',
    function ($uibModalInstance, title) {
      var self = this;
      self.title = title;

      self.ok = function () {
        $uibModalInstance.close();
      };

      self.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

      self.reject = function () {
        $uibModalInstance.dismiss('reject');
      };
  }]);
