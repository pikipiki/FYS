var authForm = {
  templateUrl: 'components/auth/auth-form/auth-form.html',
  controller: 'AuthFormController'
}

angular
  .module('components.auth')
  .component('authForm', authForm)