import styles from '../styles/Home.module.css'
import Image from 'next/image'
import "../firebase/initFirebase"
import SignInScreen from './auth'
import { Button, Divider } from '@mui/material'
import { getAuth } from 'firebase/auth'

function Greeting({ user = {} as any }) {
    return (
        <div className={styles.columnstyle}>
            {(user?.photoURL) ? <Image src={user.photoURL} width="128" height="128" alt="profile" className={styles.profile} /> :
                <p className={styles.title}>😄</p>}

            <div className={styles.toolmain}>
                <h1 className={styles.title}>
                    <a>Hey {(user?.displayName) ? user.displayName : "Du"}!</a>
                    <Divider />
                </h1>

            </div>

            {
                (!user) ? <SignInScreen /> :
                    <Button color="error" variant='contained' onClick={() => getAuth().signOut()}>Logout</Button>
            }

        </div>
    )
}

export default Greeting