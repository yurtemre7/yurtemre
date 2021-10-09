import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { getDatabase, ref, push, onValue, get, set, update } from "firebase/database"
import { getAuth } from "firebase/auth"
import '../firebase/initFirebase'
import { Button, Input, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Msg from '../classes/msg'
import { useAuthState } from "react-firebase-hooks/auth";
import SignInScreen from '../components/auth'
import { async } from '@firebase/util'

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
        if (diff < 86400000) {
            return Promise.resolve(true)
        }
    }
    return Promise.resolve(false)
}

const Chat: NextPage = () => {

    const [user, loading, error] = useAuthState(getAuth())

    const [hasError, setHasError] = useState<boolean>(false)

    const [messages, setMessages] = useState<Msg[]>([])

    const msgRef = ref(db, 'chat/messages/')

    useEffect(() => {
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


            <main className={styles.main}>
                <h1>Chat</h1>

                {messages?.map((todo: Msg, i: number) => (
                    <p key={todo.key}>{todo.toString()}  </p>
                ))}

                <form onSubmit={async (e: any) => {
                    e.preventDefault()
                    let msg: string = e.target.elements.msg.value
                    if (msg.length == 0) {
                        setHasError(false)
                        return
                    }
                    const hasAlreadySent: boolean = await checkOnceADay(user?.uid)

                    console.log(hasAlreadySent)

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

                    <TextField error={hasError} helperText={hasError && "Du hast heute schon eine Nachricht geschrieben!"} placeholder="Placeholder" color="success" id="msg" />

                    <Button style={{ margin: "1vh" }} variant="contained" color="success" endIcon={<SendIcon />} type="submit" >
                        Send
                    </Button>
                </form>
            </main>
        </div>
    )
}

export default Chat