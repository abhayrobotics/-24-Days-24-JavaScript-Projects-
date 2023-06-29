
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, signInWithPopup ,signOut} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmN9rGFg3lbqVghJRnKGKJ6O2h1BERx-8",
    authDomain: "blog-auth-5ad60.firebaseapp.com",
    projectId: "blog-auth-5ad60",
    storageBucket: "blog-auth-5ad60.appspot.com",
    messagingSenderId: "815764861000",
    appId: "1:815764861000:web:16c275a09913c52560a87d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);


let login = document.getElementById('login');

login.addEventListener('click', (e) => {
    console.log("clicked")

    //? popup method
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...

            alert(user.displayName);
            console.log("sign in successful");
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            alert(errorMessage);
        });
});

let signout = document.getElementById("signout");
signout.addEventListener('click',(e)=>{


    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sigout successfull")
    }).catch((error) => {
        // An error happened.
    });
})

    //? redirect method
//     signInWithRedirect(auth, provider);

//     getRedirectResult(auth)
//         .then((result) => {
//             console.log("user signed in")
//             // This gives you a Google Access Token. You can use it to access Google APIs.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;

//             // The signed-in user info.
//             const user = result.user;
//             // IdP data available using getAdditionalUserInfo(result)
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.customData.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//         });
// })