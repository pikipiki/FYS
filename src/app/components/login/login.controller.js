function LoginController(){
  
  var email = function(){
    var el = document.getElementById('email')
    console.log(el)
  }

}

angular
  .module('components.login')
  .controller('LoginController', LoginController)