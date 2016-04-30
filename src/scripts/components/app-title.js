angular.module('app')
  .directive('appTitle', function () {
    return {
      restrict: 'E',
      templateUrl: 'title.html'
    }
  });