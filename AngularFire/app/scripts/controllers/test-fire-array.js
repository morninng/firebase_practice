'use strict';

angular.module('angularFireApp')
  .controller('TestFireArrayCtrl', function ($scope, $firebaseArray) {


  	var root_ref = new Firebase("https://practiceangularfire.firebaseio.com/");
  	var content_array_ref = root_ref.child("content_top");
  	var sync_content_array_obj = $firebaseArray(content_array_ref);

  	var query = content_array_ref.limitToLast(5);
  	$scope.filtered_message =  $firebaseArray(query);

  	$scope.add_content = function(){

  		var content_input  = $scope.content_add;
  		var name_input = $scope.name_add;
  		var object = {content: content_input,  name: name_input };
  		sync_content_array_obj.$add(object);

  	}

    $scope.remove_element = function(element){

      console.log(element);
      var element_id = element.$id;
    //  sync_content_array_obj.$remove(element);
      $scope.filtered_message.$remove(element);
    }


  });
