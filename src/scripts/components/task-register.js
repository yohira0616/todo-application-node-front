class TaskRegister {

  constructor($http) {
    this.taskName = '';
    this.$http = $http;

  }

  doRegister() {
    console.log(this.taskName);
    console.log('登録されました');
    let param = {
      header: this.taskName
    };
    this.$http.post('http://localhost:3000/task/new', param)
      .success(function (data) {
        console.log(data);
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