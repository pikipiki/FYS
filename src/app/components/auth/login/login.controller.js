var LoginController = function(AuthService) {

  var ctrl = this

  ctrl.login = function(event) {
    ctrl.user = event.user
    return AuthService.login(ctrl.user)
           .then(
              () => console.log('login success')
            )
           .catch(
              (err) => console.log(err)
            )
  }


}

angular
  .module('components.auth')
  .controller('LoginController', LoginController)