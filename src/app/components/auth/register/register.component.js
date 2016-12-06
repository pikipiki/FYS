var register = {
  templateUrl: 'components/auth/register/register.html',
  bindings: {
    button: '@'
  }
}

angular
  .module('components.auth')
  .component('register', register)
  .config(function($stateProvider){
    $stateProvider
      .state('register', {
        url: '/register',
        component: 'register'
      })
  })