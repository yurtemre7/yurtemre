import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../firebase/initFirebase'
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import Greeting from '../components/Greeting'
import Button from '@mui/material/Button'
import { Toolbar, AppBar, Typography, IconButton, Divider } from '@mui/material'

const Home: NextPage = () => {

  const [user, loading, error] = useAuthState(getAuth());

  useEffect(() => {

    document.cookie = 'Hier ist dein Cookie :D'

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



          <p className={styles.description}>
            Emre ist ein Informatik Student im <code className={styles.code}>3.</code> Semester.
            <Divider />
          </p>


          {/* <Button onClick={(e) => Router.push('/chat')} variant="contained">Schreibe hier was :D</Button> */}

        </main>
        <Divider />

      </div>

      <footer className={styles.footer}>

        <div className={styles.center}>
          <Button href="https://github.com/yurtemre7" target="_blank" rel="noopener noreferrer" variant="contained">Github</Button>
        </div>

        <div>
          <Button href="https://t.me/emredev" target="_blank" rel="noopener noreferrer" variant="contained">Telegram</Button>
        </div>

        <div>
          <Button onClick={(e) => Router.push('/imprint')} variant="contained">Impressum</Button>
        </div>


      </footer>
    </div>
  )
}

export default Home
