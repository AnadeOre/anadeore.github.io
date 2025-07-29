import React from 'react';
import Link from 'next/link';
import Hr from '../components/Hr';
import styles from '../styles/header.module.css';

const HeaderEvent = (photos) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h2 className={styles.h2}>
          <Link className={styles.title} href='/'>
            Home
          </Link>
        </h2>
        {/* <nav className={styles.nav}>
          <Link
            className={styles.headerLink}
            href='http://anadeore.github.io/PPS'>
            Event home
          </Link>
          {photos ? (
            <Link
              className={styles.headerLink}
              href='http://anadeore.github.io/PPS/photos'>
              Photos
            </Link>
          ) : (
            <></>
          )}
        </nav> */}
      </div>
      <br />
      <Hr />
    </header>
  );
};

export default HeaderEvent;
