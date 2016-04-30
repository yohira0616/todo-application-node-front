class TaskRegister {

  constructor($http) {
    this.taskName = '';
    this.$http = $http;
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
    this.$http.post('http://localhost:3000/task/new', param)
      .success((data)=> {
        console.log(data);
        this.taskName = '';
      })
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