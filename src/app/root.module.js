angular
  .module('root', [
    'common',
    'components'
  ])

  .config(function($locationProvider){
    $locationProvider.html5Mode(true)
  })