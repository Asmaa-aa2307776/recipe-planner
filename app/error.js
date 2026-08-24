"use client";

import styles from "./error.module.css";

export default function Error({reset}){

    return(
        <main className={styles.page}>
            <div className={styles.content}>
            <h2>Oops something went wrong!</h2>
            <button className={styles.resetButton} onClick={()=>reset()}>
                Try Again
            </button>
            </div>
        </main>
    )

}