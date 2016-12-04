var register = {
  templateUrl: 'components/auth/register/register.html'
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