'use strict';

/**
 * @ngdoc function
 * @name ngNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngNewsApp
 */
angular.module('ngNewsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
