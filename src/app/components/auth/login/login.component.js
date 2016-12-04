var login = {
  templateUrl: 'components/auth/login/login.html',
  controller: 'LoginController'
}

angular
  .module('components.auth')
  .component('login', login)
  .config(function($stateProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'login'
      })
  })