'use strict';

angular.module('angularFireApp')
  .controller('TestStateCtrl', function ($scope, $firebaseObject) {

  	var root_ref = new Firebase("https://practiceangularfire.firebaseio.com/");
  	$scope.root = $firebaseObject(root_ref);
  	var aaa_ref = root_ref.child("aaa");
  	var bbb_ref = root_ref.child("bbb");
  	var ccc_ref = root_ref.child("ccc");
  	var aaa_sync_obj = $firebaseObject(aaa_ref);


  	aaa_sync_obj.$bindTo($scope, "aaa");

  	$scope.three_way_test_2 = $firebaseObject(bbb_ref);

  	$scope.three_way_test_2.$loaded()
  		.then(function(data){
  			console.log(data);
  		}).catch(function(error){
  			console.log(error);
  		});


	var three_way_obj = $firebaseObject(ccc_ref);

  	three_way_obj.$loaded(
  		function(data){
  			$scope.three_way_test = data;
  			console.log(data.$value);
  		},
  		function(error){
  			console.log(error);
  		}
  	);


  	$scope.save_input = function(){
  		$scope.three_way_test.$save();

  	}


  	$scope.save_input_2 = function(){
  		$scope.three_way_test_2.$save();

  	}

  	$scope.remove_aaa = function(){
  		aaa_sync_obj.$remove();
  	}


  	$scope.stop_synch = function(){
  		$scope.three_way_test.$destroy();
  		$scope.three_way_test_2.$destroy();

  	}


  });
