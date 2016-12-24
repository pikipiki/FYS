var AuthFormController = function(AuthService){

  var ctrl = this

  ctrl.send = function() {
    ctrl.onSubmit({
      $event: {
        user: ctrl.user
      }
    })
  }


}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController)