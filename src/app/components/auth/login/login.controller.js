function LoginController(){


  this.submit = function(userForm){
    console.log(2)
    console.log(userForm)
  }

  // this.submit = AuthService.submit(myForm)

}

angular
  .module('components.auth')
  .controller('LoginController', LoginController)