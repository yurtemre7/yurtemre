import type { NextPage } from 'next'
import { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../firebase/initFirebase'
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import Greeting from '../components/Greeting'
import Button from '@mui/material/Button'
import { Divider } from '@mui/material'

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
            Emre ist ein Informatik Student im <code className={styles.code}>4.</code> Semester
            und arbeitet in der Cross-Platform App-Entwicklung mit <code className={styles.code}><a target="_blank" rel="noopener noreferrer" href='https://flutter.dev/'>Flutter</a></code>
            am <Button href="https://www.appmelder.de/" target="_blank" rel="noopener noreferrer" variant="text">Appmelder</Button>.
          </p>


          <Button variant="contained" onClick={() => Router.push('/projects')}>Meine Projekte</Button>

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
          <Button onClick={() => Router.push('/imprint')} variant="contained">Impressum</Button>
        </div>


      </footer>
    </div>
  )
}

export default Home
