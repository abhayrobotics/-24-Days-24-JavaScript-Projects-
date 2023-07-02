
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
    getAuth, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider, getRedirectResult, signInWithPopup, signOut,
    signInWithPopup as signInWithPopupGit, GithubAuthProvider,
    FacebookAuthProvider
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//************************************************************* */Your web app's Firebase configuration
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

const database = getDatabase(app);

// ************************************************************* Signup with email. and password

let loginWithPassword = document.getElementById('signup');

signup.addEventListener('click', (e) => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            // database loading
            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email,
            })
            alert("usercreated")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
    console.log(e)
})
// ************************************************************* login with email. and password
login.addEventListener('click', (e) => {
    let email2 = document.getElementById('email2').value;
    let password2 = document.getElementById('password2').value;

    signInWithEmailAndPassword(auth, email2, password2)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
                username: username,
                last_login: dt,
            })
            alert("user loggin in ", username)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})

// ? Gmail login
const provider = new GoogleAuthProvider(app);
let google = document.getElementById('google');

google.addEventListener('click', (e) => {
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

            alert(user.displayName, user.email);
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
            console.log(errorMessage);
        });
});

let signout = document.getElementById("signout");
signout.addEventListener('click', (e) => {


    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sigout successfull")
    }).catch((error) => {
        // An error happened.
    });
})

// ? github provider
// import { getAuth as getAuthGit, signInWithPopup as signInWithPopupGit, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
const gitprovider = new GithubAuthProvider(app);

// const auth = getAuth(app);

let github = document.getElementById('github');

github.addEventListener('click', (e) => {

    signInWithPopupGit(auth, gitprovider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            alert("github login")
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            alert(errorMessage)
            // ...
        });
})

// ?facebook login
// import {  } from "firebase/auth";

const providerFacebook = new FacebookAuthProvider(app);
// const authFacebook = getAuthFacebook(app);
let facebook = document.getElementById('facebook');

facebook.addEventListener('click', (e) => {
    signInWithPopup(auth, providerFacebook)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // IdP data available using getAdditionalUserInfo(result)
            // ...
            alert("facebook login", user)
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
            alert(errorMessage)
        });
})
// Signup login

const form__signup = document.getElementById("form__signup");
form__signup.addEventListener('click', () => {
  
    const form2 = document.getElementById('form2');
    const form1 = document.getElementById('form1');
    form2.classList.add("hide");
    form1.classList.remove("hide");
    

})
form__login.addEventListener('click', () => {
    const form2 = document.getElementById('form2');
    const form1 = document.getElementById('form1');
    form2.classList.remove("hide");
    form1.classList.add("hide");
    

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