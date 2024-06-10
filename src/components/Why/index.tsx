import React from 'react'
import styles from './index.module.sass'

export const Why = () => {
  return (
    <div className={styles.why}>
        <p className={styles.why__title}>Why Bilim</p>
        <div className={styles.why__cards}>
            <div className={styles.why__card}></div>
        </div>
    </div>
  )
}
