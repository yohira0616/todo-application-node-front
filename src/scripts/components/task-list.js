class TaskList {

  constructor($http) {
    this.$http = $http;
    this.data=[];

    this.initialize();
  };

  initialize(){

  }

}


angular.module('app')
  .directive('appTaskList', function () {
    return {
      restrict: 'E',
      controller: TaskList,
      controllerAs: 'taskList',
      templateUrl:'task-list.html',
      scope: {}
    }
  });
