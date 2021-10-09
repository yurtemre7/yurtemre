import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { Toolbar, AppBar, Typography, IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';

const Imprint: NextPage = () => {
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
                        Impressum
                    </Typography>
                </Toolbar>
            </AppBar>

            <main className={styles.main}>
                <div className={styles.impressumInfo}>
                    <h1>Impressum</h1>

                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <p>Emre Yurtseven<br />
                        Gradestra&szlig;e 30<br />
                        12347 Berlin</p>

                    <h2>Kontakt</h2>
                    <p>Telefon: +49 (0) 177 9214352 <br />
                        E-Mail: yurtemre7@icloud.com</p>
                </div>
            </main>
        </div>
    )
}

export default Imprint