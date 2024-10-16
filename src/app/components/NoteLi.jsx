'use client';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/list.module.css';

const NoteLi = ({desc, title, pdf}) => {
  return (
    <li key={title}>
      -{' '}
      <Link href={pdf} target='_blank' className='linkDecor'>
        {' '}
        <b>{title}</b>
      </Link>
      <br />
      <div className={styles.abstractPubli}>{desc}</div>
    </li>
  );
};

export default NoteLi;
