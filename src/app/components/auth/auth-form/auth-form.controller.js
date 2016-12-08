var AuthFormController = function(AuthService){

  this.submit = function(){

    this.message =  null
    this.error = null

    AuthService.login(this.user)
      .then(
        () => 
          this.msgSuccess = this.user.name + " was created with success"
      )
      .catch(
        (err) => {
          this.error = err.message
        }
      )
  }

}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController)