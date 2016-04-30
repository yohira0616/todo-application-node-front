class TaskList {

  constructor($http, $scope, growl) {
    this.$http = $http;
    this.data = $scope.appTasks;
    this.growl = growl;
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
        this.growl.success('タスクを完了しました',{})
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
