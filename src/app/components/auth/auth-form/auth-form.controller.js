var AuthFormController = function(){
  console.log('controller')
  scope.oneat()
}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController)