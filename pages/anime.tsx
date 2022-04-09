import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import { getAuth } from "firebase/auth"
import '../firebase/initFirebase'
import { useAuthState } from "react-firebase-hooks/auth";
import SignInScreen from '../components/auth'


const Anime: NextPage = () => {

    const [user, loading, error] = useAuthState(getAuth())

    useEffect(() => {

    }, [])

    if (!user) {
        return (
            <div className={styles.container}>
                <SignInScreen />
            </div>
        )
    }



    return (
        <div className={styles.container}>
            <Head>
                <title>yurtemre</title>
                <meta name="description" content="Die krasseste currently watching Anime Website EUW" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Anime</h1>

                {/* {messages?.map((todo: Msg, i: number) => (
                    <p key={todo.key}>{todo.toString()}  </p>
                ))} */}

                {/* <form className={styles.formChat} onSubmit={async (e: any) => {
                    e.preventDefault()
                    let msg: string = e.target.elements.msg.value
                    if (msg.length == 0) {
                        setHasError(false)
                        return
                    }
                    const hasAlreadySent: boolean = await checkOnceADay(user?.uid)

                    if (hasAlreadySent) {
                        setHasError(true)
                    } else {
                        if (hasError) {
                            setHasError(false)
                        }
                        postMessage(msg, user?.displayName)
                        e.target.elements.msg.value = ''
                    }

                }}>



                    <TextField className={styles.textfieldChat} error={hasError} helperText={hasError && "Sorry, nur einmal am Tag!"} placeholder="Schreibe etwas.." color="primary" id="msg" />

                    <Button style={{ margin: "1vh" }} variant="contained" endIcon={<ChevronRight />} type="submit" >

                        Send
                    </Button>
                </form> */}
            </main>
        </div>
    )
}

export default Anime