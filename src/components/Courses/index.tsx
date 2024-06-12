import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'

export const Courses = () => {
  return (
    <div className={styles.courses}>
        <p className={styles.courses__title}>Our Courses</p>
        <div className={styles.courses__cards}>
            <div className={styles.courses__card}>
                <div className={styles.courses__info}>
                    <p className={styles.courses__name}>IELTS</p>
                    <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                </div>
                <div className={styles.courses__content}>
                    <Image src={'/assets/img/sucharaBoy.png'} alt='sucharaboy' width={74} height={74}/>
                    <button className={styles.courses__btn}>Start</button>
                </div>
            </div>
            <div className={styles.courses__card}>
                <div className={styles.courses__info}>
                    <p className={styles.courses__name}>IELTS</p>
                    <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                </div>
                <div className={styles.courses__content}>
                    <Image src={'/assets/img/sucharaBoy.png'} alt='sucharaboy' width={74} height={74}/>
                    <button className={styles.courses__btn}>Start</button>
                </div>
            </div>
            <div className={styles.courses__card}>
                <div className={styles.courses__info}>
                    <p className={styles.courses__name}>IELTS</p>
                    <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                </div>
                <div className={styles.courses__content}>
                    <Image src={'/assets/img/sucharaBoy.png'} alt='sucharaboy' width={74} height={74}/>
                    <button className={styles.courses__btn}>Start</button>
                </div>
            </div>

            <div className={styles.courses__card}>
                <div className={styles.courses__info}>
                    <p className={styles.courses__name}>IELTS</p>
                    <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                </div>
                <div className={styles.courses__content}>
                    <Image src={'/assets/img/sucharaBoy.png'} alt='sucharaboy' width={74} height={74}/>
                    <button className={styles.courses__btn}>Start</button>
                </div>
            </div>

            <div className={styles.courses__card}>
                <div className={styles.courses__info}>
                    <p className={styles.courses__name}>IELTS</p>
                    <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                </div>
                <div className={styles.courses__content}>
                    <Image src={'/assets/img/sucharaBoy.png'} alt='sucharaboy' width={74} height={74}/>
                    <button className={styles.courses__btn}>Start</button>
                </div>
            </div>

            <div className={styles.courses__card}>
                <div className={styles.courses__info}>
                    <p className={styles.courses__name}>IELTS</p>
                    <p className={styles.courses__desc}>corresponds to basic users of English who can understand and very basic phrases.</p>
                </div>
                <div className={styles.courses__content}>
                    <Image src={'/assets/img/sucharaBoy.png'} alt='sucharaboy' width={74} height={74}/>
                    <button className={styles.courses__btn}>Start</button>
                </div>
            </div>
        </div>
    </div>
  )
}
