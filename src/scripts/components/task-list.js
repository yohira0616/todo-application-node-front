class TaskList {

  constructor($http, $scope) {
    this.$http = $http;
    this.data = $scope.appTasks;
  };

  taskDone(taskId) {
    let param = {
      id: taskId
    };
    this.$http.post('http://localhost:3000/task/done', param)
      .success((result)=> {
        this.data.forEach((item, index, ary)=> {
          if (item.taskId === taskId) {
            ary.splice(index, 1);
          }
        });
      }).error((error)=> {
      console.log(error);
    });
  }
}


angular.module('app')
  .directive('appTaskList', function () {
    return {
      restrict: 'E',
      controller: TaskList,
      controllerAs: 'taskList',
      templateUrl: 'task-list.html',
      scope: {
        'appTasks': '='
      }
    }
  });
