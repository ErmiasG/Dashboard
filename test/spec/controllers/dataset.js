'use strict';

describe('Controller: DatasetCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var DatasetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatasetCtrl = $controller('DatasetCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatasetCtrl.awesomeThings.length).toBe(3);
  });
});
