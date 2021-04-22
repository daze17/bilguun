import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import DrawerToggleButton from './DrawerToggleButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useRouter } from 'next/router'

export default function Navbar({scroll, toggleDrawer, darkMode, setDarkMode}) {
    const router = useRouter()
    return (
        <header className={scroll ? styles.toolbar_scrolled : styles.toolbar_up}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                        {router.pathname === "/" ?
                            <AnchorLink href="#top">Bilguun</AnchorLink>
                            :
                            <Link href="/">Bilguun</Link>
                        }
                </div>

                <div className={styles.burger_menu}>
                    <DrawerToggleButton click={toggleDrawer}/>
                </div>

                <div className={styles.items}>
                    <ul>
                        <li>
                            {router.pathname === "/" ?
                            <AnchorLink href="#about">About</AnchorLink>
                            :
                            <Link href="/#about">About</Link>
                            }
                        </li>
                        <li>
                            {router.pathname === "/" ?
                            <AnchorLink href="#works">Works</AnchorLink>
                            :
                            <Link href="/#works">Works</Link>
                            }
                        </li>
                        <li>
                            {router.pathname === "/" ?
                            <AnchorLink href="#contact">Contact</AnchorLink>
                            :
                            <Link href="/#contact">Contact</Link>
                            }
                        </li>
                        <li>
                            <Link href="/">Resume</Link>
                        </li>
                        <li>
                            <div className={styles.switch}>
                                <img src="/icons/sun.svg" 
                                className={darkMode ? styles.sun_button : styles.sun_button_dis} 
                                alt="dark mode"
                                onClick={()=> setDarkMode(prevMode => !prevMode)}
                                />
                                <img src="/icons/cil_moon.svg" 
                                className={darkMode ? styles.moon_button_dis : styles.moon_button} 
                                alt="dark mode"
                                onClick={()=> setDarkMode(prevMode => !prevMode)}
                                />
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}
