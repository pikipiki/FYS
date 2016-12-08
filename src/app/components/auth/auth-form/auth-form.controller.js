var AuthFormController = function(AuthService){

  this.submit = function(){

    AuthService.login(this.user)
      .then(
        () => console.log('works')
      )
      .catch(
        (err) => console.log(err.message)
      )
  }
  
}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController)