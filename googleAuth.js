$(document).ready(function() {
  $("#googl").on("click", function() {
    var provider = new firebase.auth.GoogleAuthProvider();

    // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log("success");

        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(error);
        var errorMessage = error.message;
        console.log("Failed");
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });
});
