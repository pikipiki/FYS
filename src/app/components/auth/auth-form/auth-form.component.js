var authForm = {
  templateUrl: 'components/auth/auth-form/auth-form.html',
  bindings: {
    button: "@",  
    onSubmit: "&",
    oneat:"&"
  },
  controller: 'AuthFormController'
}

angular
  .module('components.auth')
  .component('authForm', authForm)