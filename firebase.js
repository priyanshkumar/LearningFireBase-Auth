$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyDRqBUF4-60A8sggaJ-jUSApEAGPDhaqMY",
    authDomain: "authhtrial.firebaseapp.com",
    databaseURL: "https://authhtrial.firebaseio.com",
    projectId: "authhtrial",
    storageBucket: "authhtrial.appspot.com",
    messagingSenderId: "776808278102"
  };

  firebase.initializeApp(config);
  var usersname;

  $("#submits").on("click", function() {
    var email = $("#email")
      .val()
      .trim();
    console.log(email);

    var password = $("#password")
      .val()
      .trim();

    var username = $("#username")
      .val()
      .trim();

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(function(user) {})
    //   .catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     console.log(errorCode);
    //     var errorMessage = error.message;
    //     console.log(errorMessage);
    //     // ...
    //   });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(res) {
        console.log("Login");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    // firebase
    //   .auth()
    //   .signOut()
    //   .then(function() {
    //     // Sign-out successful.
    //   })
    //   .catch(function(error) {
    //     // An error happened.
    //   });

    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     firebase
    //       .database()
    //       .ref("users/" + user.uid)
    //       .set({
    //         email: user.email,
    //         uid: user.uid,
    //         username: username
    //       });
    //     console.log("User is signed in.");
    //   } else {
    //     console.log("No user is signed in.");
    //   }
    // });

    var userId = firebase.auth().currentUser.uid;
    console.log(userId);
    return firebase
      .database()
      .ref("/users/" + userId)
      .once("value")
      .then(function(snapshot) {
        usersname = snapshot.val().username || "Anonymous";

        $("#userid").text(usersname);
        console.log(usersname);
        // ...
      });
  });
  $("#submitss").on("click", function() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        window.location = "./index.html";
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened.
      });
  });
});
