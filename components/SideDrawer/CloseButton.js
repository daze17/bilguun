import React from 'react'
import { FaTimes } from 'react-icons/fa';
import styles from './CloseButton.module.css'

const CloseButton = ({ click }) => (
  <div className={styles.container}>
    <button className={styles.toggle_button} onClick={click} >
       <FaTimes size='3em' />
    </button>
  </div>
)

export default CloseButton
