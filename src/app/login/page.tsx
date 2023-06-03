"use client"
import styles from "@/styles/Auth.module.css"
import Login from "@/components/auth/login"

export default function auth() {
  
  return(
    <div className={styles.login__page}>
        <section>
          <Login/>
        </section>
    </div>
  )
}
