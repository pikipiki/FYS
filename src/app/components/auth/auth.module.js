angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function(){
    var config = {
      apiKey: "AIzaSyBQ5gsV8WLqz8vQOATeSndEc1d2htQLRU8",
      authDomain: "feelingurstory-a0bfe.firebaseapp.com",
      databaseURL: "https://feelingurstory-a0bfe.firebaseio.com",
      storageBucket: "feelingurstory-a0bfe.appspot.com",
      messagingSenderId: "466453567749"
    };

    firebase.initializeApp(config)

  })
