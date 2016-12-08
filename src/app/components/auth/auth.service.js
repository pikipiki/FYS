var AuthService = function($firebaseAuth) {

  var auth = $firebaseAuth()

  this.login = function(user) {     
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
  }

}

angular
  .module('components.auth')
  .service('AuthService', AuthService)