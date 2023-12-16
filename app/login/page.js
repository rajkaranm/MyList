"use client"

import Image from "next/image"
import styles from "./login.module.css"
import { signIn } from "next-auth/react"

export default function Login() {
    return (
        <div  className={styles.login}>
            <button onClick={() => signIn("google", {callbackUrl: "/home"})} type="button" className={`${styles.login_button} btn btn-primary`}>
                <Image src="/google.png" width={25} height={25} />
                Login
            </button>
        </div>
    )
}
