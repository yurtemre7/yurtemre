import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Divider } from '@mui/material'

const Projects: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>yurtemre</title>
                <meta name="description" content="Zu krasse Projekte x)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <h1>Meine Projekte</h1>
                <Divider />


                {/* Projekte als Grid */}


            </main>
        </div>
    )
}

export default Projects