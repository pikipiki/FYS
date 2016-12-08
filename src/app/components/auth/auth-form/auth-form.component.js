var authForm = {
  templateUrl: 'components/auth/auth-form/auth-form.html',
  controller: 'AuthFormController'
}

angular
  .module('components.auth')
  .component('authForm', authForm)
  .config(function($stateProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'authForm'
      })
  })