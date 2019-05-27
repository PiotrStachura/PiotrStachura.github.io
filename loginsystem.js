var firebaseConfig = {
    apiKey: "AIzaSyANZGFKZVY1e-5sCMcz3_hploTCJTqPV0c",
    authDomain: "try1-d5c39.firebaseapp.com",
    databaseURL: "https://try1-d5c39.firebaseio.com",
    projectId: "try1-d5c39",
    storageBucket: "try1-d5c39.appspot.com",
    messagingSenderId: "707880159707",
    appId: "1:707880159707:web:89bb4143675ead21"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;
        if(user != null){
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
}
    } else {
      // No user is signed in.
    }
});

$("loginbutton").addEventListener("click",()=>{
    var mail = $("email_field").value;
    var pass = $("password_field").value;

    firebase.auth().signInWithEmailAndPassword(mail, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
    
        // ...
    });

})

$("logoutbutton").addEventListener("click",()=>{
    firebase.auth().signOut();
    $("user_div").style.display="none";
})