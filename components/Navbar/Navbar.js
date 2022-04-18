import Link from "next/link";
import styles from "./Navbar.module.css";
import DrawerToggleButton from "./DrawerToggleButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRouter } from "next/router";

export default function Navbar({ scroll, toggleDrawer, setDarkMode, checked }) {
  const router = useRouter();
  return (
    <header className={scroll ? styles.toolbar_scrolled : styles.toolbar_up}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          {router.pathname === "/" ? (
            <AnchorLink href="#top">Bilguun</AnchorLink>
          ) : (
            <Link href="/">Bilguun</Link>
          )}
        </div>
        <div className={styles.burger_menu}>
          <DrawerToggleButton click={toggleDrawer} />
        </div>
        <div className={styles.items}>
          <ul>
            <li>
              {router.pathname === "/" ? (
                <AnchorLink href="#about">About</AnchorLink>
              ) : (
                <Link href="/#about">About</Link>
              )}
            </li>
            <li>
              {router.pathname === "/" ? (
                <AnchorLink href="#projects">Projects</AnchorLink>
              ) : (
                <Link href="/#projects">Projects</Link>
              )}
            </li>
            <li>
              {router.pathname === "/" ? (
                <AnchorLink href="#contact">Contact</AnchorLink>
              ) : (
                <Link href="/#contact">Contact</Link>
              )}
            </li>
            <li>
              {/* <Link href="/files/resume.pdf">Resume</Link> */}
              <a
                download
                href="resume.pdf"
                alt="alt text"
                target="_blank"
                // rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <div className={styles.switch}>
                {/* <img src="/icons/sun.svg" 
                                    className={checked ? styles.sun_button : 'sun_button_dis'} 
                                    alt="dark mode"
                                    checked={checked}
                                    onClick={setDarkMode}
                                    />
                                    <img src="/icons/cil_moon.svg"
                                    className={checked ? styles.moon_button_dis : styles.moon_button} 
                                    alt="dark mode" onClick={setDarkMode}
                                    /> */}
                {checked ? (
                  <div className={styles.switch_container}>
                    <img
                      src="/icons/sun.svg"
                      className={styles.sun_button}
                      alt="dark mode"
                      onClick={setDarkMode}
                    />
                  </div>
                ) : (
                  <img
                    src="/icons/cil_moon.svg"
                    className={styles.moon_button}
                    alt="dark mode"
                    onClick={setDarkMode}
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
