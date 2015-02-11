'use strict';

/**
 * @ngdoc function
 * @name ngNewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngNewsApp
 */
angular.module('ngNewsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
