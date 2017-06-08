'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.ModalService
 * @description
 * # ModalService
 * Service for creating modals.
 */
angular.module('dashboardApp')
  .service('ModalService', ['$uibModal', function ($uibModal) {
    return {
      confirm: function (size, title, msg) {
              var modalInstance = $uibModal.open({
                templateUrl: 'views/confirmmodal.html',
                controller: 'ModalCtrl as modalCtrl',
                size: size,
                resolve: {
                  title: function () {
                    return title;
                  },
                  msg: function () {
                    return msg;
                  }
                }
              });
              return modalInstance.result;
            },
      inputModal: function (size, title) {
              var modalInstance = $uibModal.open({
                templateUrl: 'views/inputmodal.html',
                controller: 'InputmodalCtrl as modalCtrl',
                size: size,
                resolve: {
                  title: function () {
                    return title;
                  }
                }
              });
              return modalInstance.result;
            }
    };
  }]);
