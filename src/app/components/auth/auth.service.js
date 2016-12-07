var AuthService = function($http) {

  this.submit = function (url, data) {

    function success(){
      console.log('success')
    }

    function fail(){
      console.log('fail')
    }

    return $http.post(url, data).then(success, fail)

  }

}

angular
  .module('components.auth')
  .service('AuthService', AuthService)