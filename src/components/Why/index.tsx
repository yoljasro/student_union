import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'

export const Why = () => {
  return (
    <div className={styles.why}>
      <p className={styles.why__title}>Why Bilim</p>
      <div className={styles.why__cards}>
        <div className={styles.why__card}>
          <Image src={'/assets/img/cardone.png'} alt='cardone' width={48} height={48} />
          <p className={styles.why__title}>Comfy environment</p>
          <p className={styles.why__desc}>You can schedule your own timetable and how long you would like to study</p>
        </div>
        <div className={styles.why__card}>
          <Image src={'/assets/img/cardtwo.png'} alt='cardone' width={48} height={48} />
          <p className={styles.why__title}>Comfy environment</p>
          <p className={styles.why__desc}>Our teachers are highly qualified and have many years of experience with working with children as well with adults</p>
        </div>
        <div className={styles.why__card}>
          <Image src={'/assets/img/cardthree.png'} alt='cardone' width={48} height={48} />
          <p className={styles.why__title}>Planned system</p>
          <p className={styles.why__desc}>You don’t have to worry about your timetable. Our teachers will design a right plan for you. </p>
        </div>
      </div>
    </div>
  )
}
