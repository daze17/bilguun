import React from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuItems'
import styles from './SideDrawer.module.css'
import CloseButton from './CloseButton'
import Image from 'next/image'

export default function SideDrawer({ isShown, closeDrawer, setDarkMode, darkMode }) {
    const variants = {
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      };
      const logoVariants = {
        open: {
          opacity: 1,
          transition: {
            delay: 0.85
          }
        },
        closed: {
          opacity: 0,
    
        }
      };
    const pages = ([
          {title: 'Home', id: 0, slug: '/#'},
          {title: 'About', id: 1, slug: '/#about'},
          {title: 'Work', id: 2, slug: '/#work'},
          {title: 'Contact', id: 3, slug: '/#contact'},
          {title: 'Resume', id: 4, slug: '/#'}
      ])
    
    return (
      <nav className={isShown ? styles.side_drawer_open : styles.side_drawer}>
        <div>
          <motion.div 
              variants={logoVariants}
              initial={false}
              animate={isShown ? "open" : "closed"}
          >
              <CloseButton click={closeDrawer} className={styles.close_button}/>
          </motion.div>
          <div className={styles.wrapper}>
            <motion.ul
                variants={variants}
                initial={false}
                animate={isShown ? "open" : "closed"} 
            >
              {pages.map(page => (
                <MenuItem title={page.title} key={page.id} slug={page.slug} isShown={isShown} closeDrawer={closeDrawer}/>
              ))}
                <div className={styles.switch_button_container}>
                  <motion.li
                            variants={logoVariants}
                            initial={false}
                            animate={isShown ? "open" : "closed"}
                  >
                      {darkMode.value ? 
                        <Image src="/icons/sun.svg" width={45} height={45}
                        onClick={setDarkMode}
                      /> :
                        <Image src="/icons/cil_moon_side.svg" width={40} height={40}
                        onClick={setDarkMode}
                      />
                      } 
                  </motion.li>
                </div>
              </motion.ul>
            </div>
        </div>
      </nav>
    )
}
