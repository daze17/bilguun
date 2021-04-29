import React from 'react'
import styles from './Footer.module.css'
import facebookRect from '@iconify/icons-brandico/facebook-rect';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-bytesize/github';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import linkedinFill from '@iconify/icons-akar-icons/linkedin-fill';

export default function Footer() {
    return (
        <div className={styles.container}>
                <p><a href="tel:+976 89810500">+976 89810500</a></p>
                <p><a href="mailto:bilguun889@gmail.com">bilguun889@gmail.com</a></p>
                <div>
                    <a href="https://www.facebook.com/bilguun1717/" target="_blank" rel="noreferrer"> <Icon icon={facebookRect} className={styles.icons} /> </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"> <Icon icon={instagramFill} className={styles.icons} /> </a>
                    <a href="https://github.com/daze17" target="_blank" rel="noreferrer"> <Icon icon={githubIcon} className={styles.icons} /> </a>
                    <a href="https://github.com/daze17" target="_blank" rel="noreferrer"> <Icon icon={linkedinFill} className={styles.icons} /> </a>
                </div>

                <p className={styles.copyright}> © 2021 Bilguun Baasansuren </p>
        </div>
    )
}
