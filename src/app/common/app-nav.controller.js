var AppNavController = function(AuthService) {
  var ctrl = this

  ctrl.auth = AuthService.auth
  console.log('home page ' + ctrl.auth)
  
}

angular
  .module('common')
  .controller('AppNavController', AppNavController)