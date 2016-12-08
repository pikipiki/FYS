var AuthService = function($firebaseAuth) {
  return $firebaseAuth()
}

angular
  .module('components.auth')
  .service('AuthService', AuthService)