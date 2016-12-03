angular
  .module('root', [
    'common',
    'components'
  ])
  .config(function($httpProvider){
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  })