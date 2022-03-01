import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../firebase/initFirebase'
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import Button from '@mui/material/Button'
import { Toolbar, AppBar, Typography, IconButton, Divider } from '@mui/material'

const Joshua: NextPage = () => {

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
          <p className={styles.description}>
            Joshua ist ein Informatik Student im <code className={styles.code}>3.</code> Semester
            und arbeitet an <Button href="https://github.com/DeveloperX19/CStar" target="_blank" rel="noopener noreferrer" variant="text">CStar</Button>.
          </p>


          <Button variant="contained" onClick={(e) => Router.push('/projects')}>Meine Projekte</Button>

        </main>
        <Divider />

      </div>

      <footer className={styles.footer}>

        <div className={styles.center}>
          <Button href="https://github.com/DeveloperX19" target="_blank" rel="noopener noreferrer" variant="contained">Github</Button>
        </div>
      </footer>
    </div>
  )
}

export default Joshua
