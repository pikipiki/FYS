var login = {
  templateUrl: 'components/login/login.html',
  controller: 'LoginController'
}

angular
  .module('components.login')
  .component('login', login)
  .config(function($stateProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'login'
      })
  })