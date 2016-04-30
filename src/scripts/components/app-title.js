angular.module('app')
  .directive('appTitle', function () {
    return {
      restrict: 'E',
      templateUrl: 'title.html',
      controller: function ($scope) {
        this.title = $scope.appTitle;
      },
      controllerAs:'titleComponent',
      scope: {
        'appTitle': '@'
      }
    }
  });