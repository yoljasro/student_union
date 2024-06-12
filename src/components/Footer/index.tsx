import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <Image src={'/assets/img/footerlogo.png'} alt='footerlogo' width={192} height={175}/>
        <p className={styles.footer__platform}>Online english platform for all.</p>
        <p className={styles.footer__email}>bilimonlineschool@gmail.com</p>
    </div>
  )
}
