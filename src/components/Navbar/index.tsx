import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Lang } from '../Lang'
import { useTranslations } from "next-intl";
import { useRouter } from 'next/router';

export const Navbar = () => {
  const t = useTranslations()
  const router = useRouter();

  return (
    <div className={styles.navbar}>
        <Image className={styles.navbar__logo} src={'/assets/img/logo.png'} alt='logo' width={85} height={38}/>
        <ul className={styles.navbar__menu}>
            <li>About us</li>
            <li>Courses</li>
            <li>Reviews</li>
            <li>Teachers</li>
            <li>Prices</li>
            <li>Contact</li>
        </ul>
         <Lang />
    </div>
  )
}
