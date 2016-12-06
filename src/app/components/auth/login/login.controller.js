function LoginController(){

  this.submit = function(){
    console.log("regarde le gros")
  }

}

angular
  .module('components.auth')
  .controller('LoginController', LoginController)