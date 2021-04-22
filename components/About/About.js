import React from 'react'
import styles from './About.module.css'
import Link from 'next/link'
import Skills from '../Skills/Skills'
import Image from 'next/image'

export default function About() {
    return (
        <div id="about">
            <div  className={styles.curve_wrapper}>
            <svg
                className={styles.curve}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                >
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>
            </div>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.moon}>
                        <Image src="/icons/big_moon.svg" width={180} height={187}/>
                        </div>
                        <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className={styles.earth}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M746.487 600C780.521 541.165 800 472.857 800 400C800 179.086 620.914 0 400 0C179.086 0 0 179.086 0 400C0 472.857 19.4789 541.165 53.5129 600H746.487Z"/>
                        </svg>
                            <div className={styles.text_wrapper}>
                                <h1 className="title" data-aos="fade-up">ABOUT</h1>
                                <div className={styles.pfp}>
                                    <Image src="/pfp.jpg" width={225} height={225}/>
                                </div>
                                <p className={styles.text}>                     
                                Hello! I'm Bilguun Baasansuren, a front-end developer based in Ulaanbaatar Mongolia.
                                I'm comfortable with creating UI and UX designs by using Figma.
                                With my experience, I can build Single Page Applications by using React with Gatsby or NextJS, JavaScript (or TypeScript), HTML and CSS.
                                I am adaptable and confident to work into new team, furthermore I am able to pick up new frameworks to create
                                newer things. 
                                Also, I have a basic knowledge on Node js and Express js to make a back-end programming (Still learning).
                                </p>
                                {/* <Link href="/about">
                                    <button className={styles.button}>
                                        Learn more
                                    </button>
                                </Link> */}
                                <Skills/>
                            </div>
                    </div>
                </div>
            <div className={styles.slant_wrapper}>
                <svg
                    className={styles.slant}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    >
                    <polygon points="0,100 100,0 100,100" />
                </svg>
            </div>
        </div>
    )
}
