class TaskList {

  constructor($http) {
    this.$http = $http;
    this.data = [];

    this.initialize();
  };

  initialize() {
    let mock = {
      taskId: -1,
      taskName: 'sample'
    };
    let mock2 = {
      taskId: 0,
      taskName: 'NullTask'
    };
    this.data.push(mock);
    this.data.push(mock2);
  }

  taskDone(taskId) {
    console.log(taskId + '完了');
  }
}


angular.module('app')
  .directive('appTaskList', function () {
    return {
      restrict: 'E',
      controller: TaskList,
      controllerAs: 'taskList',
      templateUrl: 'task-list.html',
      scope: {}
    }
  });
