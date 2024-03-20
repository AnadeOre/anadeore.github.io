import React from 'react';
import Link from 'next/link';
import Hr from './Hr';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        rel='stylesheet'
      />
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
