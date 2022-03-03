import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../firebase/initFirebase'
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import Greeting from '../components/Greeting'
import Button from '@mui/material/Button'
import { Toolbar, AppBar, Typography, IconButton, Divider, TextField } from '@mui/material'
import ReactPlayer from 'react-player'
import { ChevronRight } from '@mui/icons-material'

const Home: NextPage = () => {

    const [hasError, setHasError] = useState<boolean>(false)
    const [url, setUrl] = useState<string>("")
    const { query } = useRouter();

    return (
        <div className={styles.container}>

            <div className={styles.toppart}>
                <Head>
                    <title>yurtemre</title>
                    <meta name="description" content="Zu krass für TU Berlin >:D" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <form className={styles.formChat} onSubmit={async (e: any) => {
                        e.preventDefault()
                        console.log(e)
                        const field = document.getElementById("video_url") as HTMLInputElement
                        let url: string = field.value

                        if (url.length == 0) {
                            setHasError(true)
                            return false
                        }
                        setUrl(url)
                        return false
                    }}>
                        <TextField className={styles.textfieldChat} placeholder="Video URL" error={hasError} helperText={hasError && "Bitte gebe einen Link ein"} color="primary" id="video_url" />
                        <Button style={{ margin: "1vh" }} variant="contained" endIcon={<ChevronRight />} type="submit" ></Button>

                    </form>

                    
                    <ReactPlayer url={url === "" ? query.url : url} controls playing={true} width='80%' height='auto' playbackRate={1.5} />

                </main>

                <Divider />

            </div>


        </div >
    )
}

export default Home
