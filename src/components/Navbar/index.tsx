import React from 'react'
import styles from './index.module.sass'
import Image from 'next/image'
import { Lang } from '../Lang'
import { useTranslations } from "next-intl";
import { useRouter } from 'next/router';
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  const t = useTranslations()
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__info}>
      <a  href={'/'}>
        <Image className={styles.navbar__logo} src={'/assets/img/whitelogo.png'} alt='logo' width={194} height={186} />
      </a>
      <a href={'tel:+998781139545'} target='_blank'>
      <p className={styles.navbar__number}>+998781139545</p>
      </a>
      </div>
      <div className={styles.navbar__item}>
      <ul className={styles.navbar__menu}>
      <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navbar__link}
            >
        <li>About Us</li>
        </Link>
        <Link
              activeClass="active"
              to="courses"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navbar__link}
            >
        <li>Courses</li>
        </Link>
        <Link
              activeClass="active"
              to="reviews"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navbar__link}
            >
        <li>Reviews</li>
        </Link>
        <Link
              activeClass="active"
              to="teachers"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navbar__link}
            >
        <li>Teachers</li>
        </Link>
        <Link
              activeClass="active"
              to="prices"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navbar__link}
            >
        <li>Prices</li>
        </Link>
        <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navbar__link}
            >
        <li>Contact</li>
        </Link>

      </ul>
      <Lang />
      </div>

    </div>
  )
}
