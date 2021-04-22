import React, { useState, useEffect } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { useCycle } from 'framer-motion'
import SideDrawer from './SideDrawer/SideDrawer'
import useDarkMode from 'use-dark-mode';

export default function Layout({ children }) {
    const [isOpen, toggleOpen] = useCycle(false, true)
    const [navScroll, setNavScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
      }, [])
    
      useEffect(() => {
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])
    let lastScrollTop = 0;
    const handleScroll = (e) => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
        // downscroll code
        setNavScroll(true)
        } else {
        // upscroll code
        setNavScroll(false)
        }
        lastScrollTop = st <= 50 ? 50 : st;
    }
    const darkMode = useDarkMode(false);
    return (
        <div>
            <Navbar 
                toggleDrawer={() => toggleOpen()} 
                scroll={navScroll} 
                setDarkMode={darkMode.toggle}
                checked={darkMode.value}/>
            <SideDrawer 
                isShown={isOpen}                 
                closeDrawer={() => toggleOpen()}
                setDarkMode={darkMode.toggle}
                darkMode={darkMode}/>
            { children }
            <Footer/>
        </div>
    )
}
