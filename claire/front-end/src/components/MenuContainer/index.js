import React from 'react'
import styles from './index.module.css'
import Logo from '../Logo'

export default ({ children }) => (
  <div className={styles.container}>
    {children}
    <Logo />
  </div>
)
