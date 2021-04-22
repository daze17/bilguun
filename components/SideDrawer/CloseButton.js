import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './CloseButton.module.css'

const CloseButton = ({ click }) => (
  <div className={styles.container}>
    <button className={styles.toggle_button} onClick={click} >
      <FontAwesomeIcon icon={faTimes} size="3x"/>
    </button>
  </div>
)

export default CloseButton
