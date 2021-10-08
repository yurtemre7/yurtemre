import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Router from 'next/router';


const Minecraft: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>yurtemre</title>
                <meta name="description" content="Zu krass für Minecraft >:D" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <p className={styles.description}>
                    Der Minecraft-Server ist erreichbar unter der gleichen IP, wie diese Website: <br /> <code onClick={(e) => Router.push('/')} className={styles.code}>yurtemre.me</code>
                </p>

                <div className={styles.plugininfo}>
                    <p> Wir nutzen: </p>

                    <br />
                    <a>- Spigot</a>

                    <br />
                    <a>- SmoothTimber (Für schnelles Bäumefällen)</a>

                    <br />
                    <a>- Warp-System (Für Teleportierungen)</a>

                    <br />
                    <a>- Death-Coords (Für die Todespositionen)</a>

                    <br />
                    <a>- BetterSleep (Für besseres Schlafen)</a>

                </div>
            </main>
        </div>
    )
}

export default Minecraft