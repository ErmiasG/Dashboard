'use strict';

describe('Controller: PublicdatasetCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var PublicdatasetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PublicdatasetCtrl = $controller('PublicdatasetCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PublicdatasetCtrl.awesomeThings.length).toBe(3);
  });
});
