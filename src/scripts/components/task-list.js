class TaskList {

  constructor($http) {
    this.$http = $http;
    this.data = [];

    this.initialize();
  };

  initialize() {
    this.$http.get('http://localhost:3000/task/all')
      .success((tasks)=> {
        tasks.forEach((task)=> {
          this.data.push({
            taskId: task.id,
            taskName: task.header
          });
        });
        console.log(tasks);
      })
  }

  taskDone(taskId) {
    let val = this.data.find(function (elem, idx, ary) {
      return elem.taskId = taskId;
    });
    console.log(val);

    let param = {
      id: taskId
    };
    this.$http.post('http://localhost:3000/task/done', param)
      .success((data)=> {
        console.log(data);
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
