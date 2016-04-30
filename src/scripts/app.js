angular.module('app', ['ui.bootstrap']);

angular.module('app')
  .directive('myTemplate', function () {
    return {
      restrict: 'E',
      templateUrl: 'my-tmpl.html'
    }
  });