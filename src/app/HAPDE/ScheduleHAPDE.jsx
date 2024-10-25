'use client';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/list.module.css';
import stylesHAPDE from './stylesHAPDE.module.css';

const Schedule = ({time, title, abstract, slides, speaker}) => {
  return (
    <li key={title}>
      <div>
        <span className={stylesHAPDE.times}>{time}:</span>{' '}
        <span className={stylesHAPDE.speaker}>{speaker}</span>
      </div>
      <span>{'   '}</span>
      <b>{title}</b>
      {/* (
      {slides && (
        <Link href={slides} target='_blank' className='linkDecor'>
          download slides
        </Link>
      )}
      ) */}
      <br />
      {abstract && <div className={styles.abstractPubli}>{abstract}</div>}
    </li>
  );
};

export default Schedule;
