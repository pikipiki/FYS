var uploadPics = {
  templateUrl: 'components/upload-pics/upload-pics.html'
}

angular
  .module('components.upload-pics')
  .component('uploadPics', uploadPics)
  .config(function($stateProvider){
    $stateProvider
      .state('upload-pics', {
        url: '/',
        component: 'uploadPics'
      })
  })