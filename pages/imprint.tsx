import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {  } from 'react'
import { Divider } from '@mui/material'

const Imprint: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>yurtemre</title>
                <meta name="description" content="Zu krass für die Impressumspflicht :)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.impressumInfo}>
                    <h1>Impressum</h1>
                    <Divider />

                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <p>Emre Yurtseven<br />
                        Gradestra&szlig;e 30<br />
                        12347 Berlin</p>
                    <Divider />
                    <h2>Kontakt</h2>

                    <p>Telefon: +49 (0) 177 9214352 <br />
                        E-Mail: yurtemre7@icloud.com</p>
                </div>
            </main>
        </div>
    )
}

export default Imprint