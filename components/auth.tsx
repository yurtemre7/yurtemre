import React from "react";
import styles from '../styles/Home.module.css'
import '../firebase/initFirebase'
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import Router from 'next/router'

function loginWithGithub(e: any) {
    e.preventDefault()

    const auth = getAuth();
    let provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken

            const user = result.user
            console.log(user)

            Router.push('/')
        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            const email = error.email

            const credential = GithubAuthProvider.credentialFromError(error)
            console.log(error)

        });
}

function SignInScreen() {
    return (
        <div className={styles.code} onClick={loginWithGithub}>Github Login</div>
    );
}

export default SignInScreen;