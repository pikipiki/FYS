var LoginController = function(AuthService) {

  var ctrl = this

  ctrl.login = function(event) {
    ctrl.user = event.user
    ctrl.success = function() {
      ctrl.msg = "Login Success"
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