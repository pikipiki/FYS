var AuthFormController = function(AuthService){

  this.createUser = function() {
    // this.message = null
    // this.error = null

    console.log(1)

    // AuthService.$createUserWithEmailAndPassword(this.email, this.password)
    //   .then(function(firebaseUser) {
    //     this.message = "User created with uid: " + firebaseUser.uid
    //     console.log(2)
    //   }).catch(function(error) {
    //     console.log(3)
    //     this.error = error
    //   })

    AuthService.$createUserWithEmailAndPassword(this.email, this.password)
      .then(function(firebaseUser) {
        this.message = "User created with uid: " + firebaseUser.uid
        console.log(2)
      },function(error) {
        console.log(3)
        this.error = error
      })


  }

  this.deleteUser = function() {
    this.message = null
    this.error = null

    AuthService.$deleteUser().then(function() {
      this.message = "User deleted"
    }).catch(function(error) {
      this.error = error
    })
  }
}


angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController)