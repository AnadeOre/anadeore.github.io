import React from 'react';
import Link from 'next/link';
import Hr from '../components/Hr';
import styles from '../styles/header.module.css';

const HeaderEvent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h3 className={styles.h2}>
          <Link className={styles.title} href='/'>
            Home
          </Link>
        </h3>
        <nav className={styles.nav}>
          <Link
            className={styles.headerLink}
            href='http://anadeore.github.io/HAPDE'>
            Event home
          </Link>
          <Link
            className={styles.headerLink}
            href='http://anadeore.github.io/HAPDE/photos'>
            Photos
          </Link>
        </nav>
      </div>
      <br />
      <Hr />
    </header>
  );
};

export default HeaderEvent;
