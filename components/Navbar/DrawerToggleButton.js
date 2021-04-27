import React from 'react'
import styles from './DrawerToggleButton.module.css'
import { FaBars } from 'react-icons/fa';

const DrawerToggleButton = ({ click }) =>{
    return(
        <div className={styles.container}>
            <button className={styles.toggle_button} onClick={click} >
            <FaBars size='2.5em' />
            </button>
        </div>
    )
}

export default DrawerToggleButton