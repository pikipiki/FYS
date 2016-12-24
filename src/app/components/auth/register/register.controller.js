var RegisterController = function(AuthService) {
  var ctrl = this

  ctrl.register = function(event) {
    ctrl.success = function() {
      ctrl.msg = "Register successful"
    }
    ctrl.fail = function(err) {
      ctrl.msg = err
    }

    return AuthService.register(event.user)
           .then(ctrl.success)
           .catch(ctrl.fail)
  }
  
} 

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController)