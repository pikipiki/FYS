var AuthService = function($firebaseAuth) {

  var auth = $firebaseAuth()

  this.login = function(user) {     
    auth.$createUserWithEmailAndPassword(user.email, user.password)
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
  .service('AuthService', AuthService)