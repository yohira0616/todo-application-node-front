angular.module('app', ['ui.bootstrap', 'angular-growl']);

angular.module('app')
  .config(function (growlProvider) {
    growlProvider.globalTimeToLive(3000);
  });
