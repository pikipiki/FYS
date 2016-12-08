var AuthFormController = function(AuthService){

  this.createUser = function() {

    return AuthService
      .$createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then(
        () => console.log('this works')    
      )
      .catch(
        (error) => console.log(error)
      )

  }

}


angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController)