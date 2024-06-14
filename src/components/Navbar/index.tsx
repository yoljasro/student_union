import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Lang } from '../Lang'
import { useTranslations } from "next-intl";
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
  const t = useTranslations()
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <Link  href={'/'}>
        <Image className={styles.navbar__logo} src={'/assets/img/whitelogo.png'} alt='logo' width={194} height={186} />
      </Link>
      <ul className={styles.navbar__menu}>
        <li>About Us</li>
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
