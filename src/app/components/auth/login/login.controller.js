var LoginController = function(AuthService, $state) {

  var ctrl = this
  console.log(AuthService.auth)

  ctrl.login = function(event) {
    ctrl.user = event.user
    ctrl.success = function() {
      ctrl.msg = "Login Success"
      AuthService.auth = true
      console.log(AuthService.auth)
      $state.go('upload-pics')
    }
    ctrl.fail = function(err) {
      ctrl.msg = err
    }
    return AuthService.login(ctrl.user)
           .then(ctrl.success)
           .catch(ctrl.fail)
  }

}

angular
  .module('components.auth')
  .controller('LoginController', LoginController)