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
import SignInScreen from '../components/auth'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { Toolbar, AppBar, Typography } from '@mui/material'

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

        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              Home
            </Typography>
            <Button className={styles.marginRight} onClick={(e) => Router.push('/minecraft')} variant="outlined" color='inherit'>Minecraft Server</Button>
            {
              (!user) ? <SignInScreen /> :
                <Button color="error" variant="contained" onClick={() => getAuth().signOut()}>Logout</Button>
            }
          </Toolbar>
        </AppBar>

        <main className={styles.main}>
          <Greeting user={user} />

          <p className={styles.description}>
            Emre ist ein Informatik Student im <code className={styles.code}>3.</code> Semester.
          </p>

          <Button  onClick={(e) => Router.push('/chat')} variant="contained">Schreibe hier was :D</Button>

        </main>

      </div>

      <footer className={styles.footer}>

        <Button href="https://github.com/yurtemre7" target="_blank" rel="noopener noreferrer" variant="text">Github</Button>

        <Button href="https://t.me/emredev" target="_blank" rel="noopener noreferrer" variant="text">Telegram</Button>

        <Button onClick={(e) => Router.push('/imprint')} variant="text">Impressum</Button>

      </footer>
    </div>
  )
}

export default Home
