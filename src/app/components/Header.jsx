import React from 'react';
import Link from 'next/link';
import Hr from './Hr';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h2 className={styles.h2}>
          <Link className={styles.title} href='/'>
            Ana Emilia de Orellana
          </Link>
        </h2>
        <nav className={styles.nav}>
          <Link className={styles.headerLink} href='research'>
            Research
          </Link>
          <Link className={styles.headerLink} href='links'>
            Links
          </Link>
          <Link className={styles.headerLink} href='talks'>
            Talks
          </Link>
          <Link className={styles.headerLink} href='teaching'>
            Teaching
          </Link>
          <Link
            className={styles.headerLink}
            href='/EnglishCV.pdf'
            target='_blank'>
            CV
          </Link>
        </nav>
      </div>
      <br />
      <Hr />
    </header>
  );
};

export default Header;
