'use strict';

describe('Controller: TestStateCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFireApp'));

  var TestStateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestStateCtrl = $controller('TestStateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
