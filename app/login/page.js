import Image from "next/image"
import styles from "./login.module.css"

export default function Login() {
    return (
        <div className={styles.login}>
            <button type="button" className={`${styles.login_button} btn btn-primary`}>
                <Image src="/google.png" width={25} height={25} />
                Login
            </button>
        </div>
    )
}