var RegisterController = function(AuthService) {
  var ctrl = this

  ctrl.register = function(event) {
    ctrl.user = event.user
    return AuthService.register(ctrl.user)
           .then(
              () => console.log('success')
            )
           .catch(
              (err) => console.log(err)
            )
  }
} 

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController)