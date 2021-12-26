import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { Toolbar, AppBar, Typography, IconButton, Divider } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';

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