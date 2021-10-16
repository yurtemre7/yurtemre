import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { getDatabase, ref, push, onValue, get, set, update } from "firebase/database"
import { getAuth } from "firebase/auth"
import '../firebase/initFirebase'

import Msg from '../classes/msg'
import { useAuthState } from "react-firebase-hooks/auth";
import SignInScreen from '../components/auth'
import { Toolbar, AppBar, Typography, IconButton, Button, TextField } from '@mui/material'
import { ArrowBack, ChevronRight } from '@mui/icons-material';

const db = getDatabase()

function postMessage(msg: string, username: string) {
    push(ref(db, 'chat/messages/'), {
        username: username,
        msg: msg,
        timestamp: Date.now()
    })
}

async function checkOnceADay(userId: string): Promise<boolean> {
    let snapshot = await get(ref(db, 'users/' + userId + '/'))
    const userData = snapshot.val()
    if (!userData || !userData.lastChecked) {
        update(ref(db, 'users/' + userId + '/'), {
            lastChecked: Date.now()
        })
        return Promise.resolve(false)
    } else {
        const lastChecked = userData.lastChecked
        const now = Date.now()
        const diff = now - lastChecked
        console.log(diff)
        if (diff < 86400000) {
            return Promise.resolve(true)
        } else {
            update(ref(db, 'users/' + userId + '/'), {
                lastChecked: Date.now()
            })
            return Promise.resolve(false)
        }
    }
}

const Chat: NextPage = () => {

    const [user, loading, error] = useAuthState(getAuth())

    const [hasError, setHasError] = useState<boolean>(false)

    const [messages, setMessages] = useState<Msg[]>([])



    useEffect(() => {
        const msgRef = ref(db, 'chat/messages/')
        onValue(msgRef, (snapshot) => {
            let msgs: Msg[] = []
            const data = snapshot.val()

            for (let msg in data) {
                let m = data[msg]
                m = new Msg(m)
                m.setKey(msg)
                msgs.push(m)
            }

            setMessages(msgs)
        })
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
                <meta name="description" content="Der krassteste Chat EUW" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        onClick={(e) => Router.push('/')}
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Chat
                    </Typography>
                </Toolbar>
            </AppBar>


            <main className={styles.main}>
                <h1>Chat</h1>

                {messages?.map((todo: Msg, i: number) => (
                    <p key={todo.key}>{todo.toString()}  </p>
                ))}

                <form className={styles.formChat} onSubmit={async (e: any) => {
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
                </form>
            </main>
        </div>
    )
}

export default Chat