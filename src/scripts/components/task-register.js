class TaskRegister {

  constructor() {
    this.taskName = '';

  }

  doRegister() {
    console.log(this.taskName);
    console.log('登録されました');
  }

}


angular.module('app')
  .directive('appTaskRegister', function () {
    return {
      restrict: 'E',
      templateUrl: 'task-register.html',
      controller: TaskRegister,
      controllerAs: 'register'
    }
  });