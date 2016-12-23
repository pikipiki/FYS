var authForm = {
  templateUrl: 'components/auth/auth-form/auth-form.html',
  controller: 'AuthFormController',
  bindings: {
    bob: '&'
  }
}

angular
  .module('components.auth')
  .component('authForm', authForm)