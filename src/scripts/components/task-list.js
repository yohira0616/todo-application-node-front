class TaskList {

  constructor($http) {
    this.$http = $http;
    this.data = [];

    this.initialize();
  };

  initialize() {
    this.data = [];
    this.$http.get('http://localhost:3000/task/all')
      .success((tasks)=> {
        tasks.forEach((task)=> {
          this.data.push({
            taskId: task.id,
            taskName: task.header
          });
        });
      }).error((error)=> {
      console.log(error);
    })
  }

  taskDone(taskId) {
    let param = {
      id: taskId
    };
    this.$http.post('http://localhost:3000/task/done', param)
      .success((result)=> {
        this.initialize();
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
      scope: {}
    }
  });
