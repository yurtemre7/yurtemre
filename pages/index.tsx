import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../firebase/initFirebase'
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import '../components/Greeting'
import Greeting from '../components/Greeting'
import SignInScreen from '../components/auth'

const Home: NextPage = () => {

  const [user, loading, error] = useAuthState(getAuth());


  // console.log("Loading:", loading, "|", "Current user:", user);

  useEffect(() => {
    if (document.cookie.length == 0) {
      document.cookie = 'Hier ist dein Cookie :D'
    }
  }, [])

  return (
    <div className={styles.container}>

      <div className={styles.toppart}>
        <Head>
          <title>yurtemre</title>
          <meta name="description" content="Zu krass für TU Berlin >:D" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Greeting user={user} />

          <p onClick={(e) => Router.push('/minecraft')} className={styles.code}>Spielst du Minecraft?</p>

          <p className={styles.description}>
            Emre ist ein Informatik Student im <code className={styles.code}>3.</code> Semester.
          </p>

          {(!user) ? <SignInScreen /> : <div className={styles.code} onClick={() => getAuth().signOut()}>Logout</div>}
        </main>

      </div>

      <footer className={styles.footer}>
        <a href="https://github.com/yurtemre7" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href="https://t.me/emredev" target="_blank" rel="noopener noreferrer" >
          Telegram
        </a>
      </footer>
    </div>
  )
}

export default Home
