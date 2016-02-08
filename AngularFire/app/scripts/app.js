
'use strict';

/**
 * @ngdoc overview
 * @name angularFireApp
 * @description
 * # angularFireApp
 *
 * Main module of the application.
 */
angular
  .module('angularFireApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'firebase'
  ]);


angular.module('angularFireApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


  $stateProvider
  .state('/test_state', {
    url: "/test_state",
    templateUrl: 'views/test_state.html',
    controller: 'TestStateCtrl'
  })



}]);