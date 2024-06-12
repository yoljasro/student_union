import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <p className={styles.header__title}>Welcome to</p>
        <Image src={'/assets/img/bigLogo.png'} alt='bigLogo' width={315} height={161} />
        <p className={styles.header__desc}>Student Union is an learning centre designed to help you to learn several courses comfortably to achieve success in your life.</p>
        <div className={styles.header__btns}>
          <button className={styles.header__getBtn}>Get started</button>
          <Link href={'https://student-union.modme.uz/entry/lead?utm_source=4564&section=145181'} target='_blank'>
            <button className={styles.header__freeBtn}>Try free</button>
          </Link>
        </div>
      </div>
      <Image className={styles.header__bookBoy} src={'/assets/img/bookBoy.png'} alt='bookBoy' width={530} height={530} />
    </div>
  )
}
