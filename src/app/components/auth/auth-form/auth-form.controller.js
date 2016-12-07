var AuthFormController = function(AuthService){

  this.submit = function() {
    AuthService.submit('/login', this.user)
  }
    
}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController)