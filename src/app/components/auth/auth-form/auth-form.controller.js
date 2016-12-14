var AuthFormController = function(AuthService){

  var ctrl = this

  ctrl.submit = function(){

    ctrl.message =  null
    ctrl.error = null

    AuthService.login(ctrl.user)
      .then(
        () => 
          ctrl.msgSuccess = ctrl.user.name + " was created with success"
      )
      .catch(
        (err) => {
          ctrl.error = err.message
        }
      )
  }

}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController)