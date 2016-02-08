'use strict';

angular.module('angularFireApp')
  .controller('TestStateCtrl', function ($scope, $firebaseObject) {

  	var ref = new Firebase("https://practiceangularfire.firebaseio.com/");

  	$scope.data = $firebaseObject(ref);



  });
