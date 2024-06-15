import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'

export const Teachers = () => {
  return (
    <div className={styles.teachers} id='teachers'>
      <p className={styles.teachers__title}>Teachers</p>
      <div className={styles.teachers__cards}>
        <div className={styles.teachers__card}>
          <Image className={styles.teachers__image} src={'/assets/img/teachers.png'} alt='teachers' width={295} height={351}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>Laura Ferguson</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/teachers.png'} alt='teachers' width={295} height={351}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>Laura Ferguson</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/teachers.png'} alt='teachers' width={295} height={351}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>Laura Ferguson</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/teachers.png'} alt='teachers' width={295} height={351}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>Laura Ferguson</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/teachers.png'} alt='teachers' width={295} height={351}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>Laura Ferguson</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>
        <div className={styles.teachers__card}>
        <Image className={styles.teachers__image} src={'/assets/img/teachers.png'} alt='teachers' width={295} height={351}/>
          <div className={styles.teachers__info}>
            <p className={styles.teachers__name}>Laura Ferguson</p>
            <p className={styles.teachers__experience}>Experience: 6 years</p>
            <p className={styles.teachers__certificate}>Certificates: IELTS</p>
          </div>
        </div>

      </div>
    </div>
  )
}
