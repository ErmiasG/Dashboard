'use strict';

describe('Controller: InputmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var InputmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputmodalCtrl = $controller('InputmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
