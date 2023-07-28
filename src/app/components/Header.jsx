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
        </nav>
      </div>
      <br />
      <Hr />
    </header>
  );
};

export default Header;
