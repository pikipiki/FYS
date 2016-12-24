var authForm = {
  templateUrl: 'components/auth/auth-form/auth-form.html',
  controller: 'AuthFormController',
  bindings: {
    button: '@',
    message: '@',
    onSubmit: '&'
  }
}

angular
  .module('components.auth')
  .component('authForm', authForm)