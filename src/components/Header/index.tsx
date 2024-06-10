import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__info}>
        <p className={styles.header__title}>Welcome to</p>
        <Image src={'/assets/img/bigLogo.png'} alt='bigLogo' width={315} height={161}/>
        <p className={styles.header__desc}>Bilim is an online platform designed to help you to learn English comfortably.</p>
        <div className={styles.header__btns}>
            <button className={styles.header__getBtn}>Get started</button>
            <button className={styles.header__freeBtn}>Try free</button>
        </div>
        </div>
        <Image className={styles.header__bookBoy} src={'/assets/img/bookBoy.png'} alt='bookBoy' width={530} height={530}/>
    </div>
  )
}