function LoginController($http){

  this.submit = function (userForm) {

    var url = '/login',

        data = userForm

        success = function(){
          console.log('success')
        },

        failure = function(){
          console.log('failure')
        }

    return $http.post(url, data).then(success, failure)

  }

}

angular
  .module('components.login')
  .controller('LoginController', LoginController)