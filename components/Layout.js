import React, { useState, useEffect } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { useCycle } from 'framer-motion'
import SideDrawer from './SideDrawer/SideDrawer'

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

    const [darkMode, setDarkMode] = useState(false)
    useEffect(()=>{
        localStorage.setItem('dark', JSON.stringify(darkMode));
        (darkMode) ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
    },[darkMode]);

    function getInitialMode() {
      const isReturningUser = "dark" in localStorage;
      const savedMode = JSON.parse(localStorage.getItem('dark'));
      const userPrefersDark = getPrefColorSheme();
      if (isReturningUser){
          return savedMode;
      } else if (userPrefersDark) {
          return true;
      } else {
          return false;
      }
    }
    function getPrefColorSheme(){
        if(!window.matchMedia) return;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    
    
    return (
        <div>
            <Navbar 
                toggleDrawer={() => toggleOpen()} 
                scroll={navScroll} 
                darkMode={darkMode} 
                setDarkMode={setDarkMode}/>
            <SideDrawer 
                isShown={isOpen}                 
                closeDrawer={() => toggleOpen()}
                setDarkMode={setDarkMode}
                darkMode={darkMode}/>
            { children }
            <Footer/>
        </div>
    )
}
