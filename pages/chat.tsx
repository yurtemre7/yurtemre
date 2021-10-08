import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { getDatabase, ref, push, onValue } from "firebase/database"
import { getAuth } from "firebase/auth"
import '../firebase/initFirebase'
import { Button, Input } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { Padding } from '@mui/icons-material'
import Msg from '../classes/msg'
import { useAuthState } from "react-firebase-hooks/auth";
import SignInScreen from '../components/auth'

const db = getDatabase()

function postMessage(msg: string, username: string) {
    push(ref(db, 'chat/messages/'), {
        username: username,
        msg: msg,
        timestamp: Date.now()
    })
}

const Chat: NextPage = () => {

    const [user, loading, error] = useAuthState(getAuth());

    const msgRef = ref(db, 'chat/messages/')
    const [messages, setMessages] = useState<Msg[]>([])

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
    if (loading) return <div>Loading...</div>

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

                <form onSubmit={(e: any) => {
                    e.preventDefault()
                    let msg: string = e.target.elements.msg.value;
                    postMessage(msg, user?.displayName)
                    e.target.elements.msg.value = ''
                }}>

                    <Input placeholder="Placeholder" color="success" id="msg" />


                    <Button style={{ margin: "1vh" }} variant="contained" color="success" endIcon={<SendIcon />} type="submit" >
                        Send
                    </Button>
                </form>

            </main>
        </div>
    )
}

export default Chat