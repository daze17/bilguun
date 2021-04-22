import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div id="top" className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.text_wrapper}>
                    <h1 className={styles.title}>Bilguun Baasansuren</h1>
                    <h1 className={styles.sub} data-aos="zoom-up">A web developer</h1>
                </div>
            </div>
       </div>
    )
}