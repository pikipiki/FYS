var authForm = {
  templateUrl: 'components/auth/auth-form/auth-form.html',
  controller: 'AuthFormController',
  bindings: {
    onSubmit: "&"
  }
}

angular
  .module('components.auth')
  .component('authForm', authForm)