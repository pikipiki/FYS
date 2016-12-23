var LoginController = function(AuthService) {

  var ctrl = this

  // ctrl.login = function(user){

  // // AuthService.login(user)
  // //   .then(
  // //     () => console.log("success")
  // //   )
  // //   .catch(
  // //     () => console.log("fail")
  // //   )

  ctrl.login = function(user) {
    console.log(user)
  }


}

angular
  .module('components.auth')
  .controller('LoginController', LoginController)