import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { Toolbar, AppBar, Typography, IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';

const Minecraft: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>yurtemre</title>
                <meta name="description" content="Zu krass für Minecraft >:D" />
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
                        Minecraft
                    </Typography>
                </Toolbar>
            </AppBar>

            <main className={styles.main}>

                <h1 className={styles.description}>
                    Der Minecraft-Server ist erreichbar unter der gleichen IP, wie diese Website:
                </h1>

                <div className={styles.marginBottom}>
                    <code className={styles.code}>yurtemre.me</code>
                </div>

                <div className={styles.plugininfo}>
                    <h2> Wir nutzen: </h2>
                    <br />
                    <h3>- Spigot</h3>
                    <h3>- SmoothTimber (Für schnelles Bäumefällen)</h3>
                    <h3>- Warp-System (Für Teleportierungen)</h3>
                    <h3>- Death-Coords (Für die Todespositionen)</h3>
                    <h3>- BetterSleep (Für besseres Schlafen)</h3>

                </div>
            </main>
        </div>
    )
}

export default Minecraft