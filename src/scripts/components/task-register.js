class TaskRegister {

  constructor($http, growl) {
    this.taskName = '';
    this.$http = $http;
    this.data = [];
    this.initialize();
    this.growl = growl;
  }

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

  doRegister($event) {
    const ENTER_KEY_CODE = 13;
    if ($event.keyCode !== ENTER_KEY_CODE) {
      return;
    }
    if (!this.taskName) {
      return;
    }
    let param = {
      header: this.taskName
    };
    console.log(param);
    this.$http.post('http://localhost:3000/task/new', param)
      .success((data)=> {
        console.log(data);
        this.taskName = '';
        this.data.push({
          taskId: data.id,
          taskName: data.header
        });
        this.growl.success('タスクを登録しました',{});
      }).error((error)=> {
      console.log(error);
    });
  }
}


angular.module('app')
  .directive('appTaskRegister', function () {
    return {
      restrict: 'E',
      templateUrl: 'task-register.html',
      controller: TaskRegister,
      controllerAs: 'register',
      scope: {}
    }
  });