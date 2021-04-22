import React from 'react'
import styles from './DrawerToggleButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const DrawerToggleButton = ({ click }) =>{
    return(
        <div className={styles.container}>
            <button className={styles.toggle_button} onClick={click} >
            <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
        </div>
    )
}

export default DrawerToggleButton