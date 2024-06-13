import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'

export const Learn = () => {
    return (
        <div className={styles.learn}>
            <p className={styles.learn__title}>Learn english with us <br /> starting from today</p>
            <div className={styles.learn__content}>
                <Image src={'/assets/img/learnBoy.png'} width={438} height={438} alt='image'/>
                <div className={styles.learn__cards}>
                    <div className={styles.learn__card}>
                        <button className={styles.learn__btn}>Contact Us</button>
                        <p className={styles.learn__text}>You can check our free lesson with our teachers or you can pay for the the course with a discount and start learning</p>
                    </div>
                    <div className={styles.learn__card}>
                        <button className={styles.learn__btn}>Contact Us</button>
                        <p className={styles.learn__text}>You can check our free lesson with our teachers or you can pay for the the course with a discount and start learning</p>
                    </div>
                    <div className={styles.learn__card}>
                        <button className={styles.learn__btn}>Contact Us</button>
                        <p className={styles.learn__text}>You can check our free lesson with our teachers or you can pay for the the course with a discount and start learning</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
