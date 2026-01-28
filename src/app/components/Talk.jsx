'use client';
import React from 'react';
import {useState} from 'react';
import styles from '../styles/list.module.css';
import Link from 'next/link';
const Talk = ({title, where, link, event, when, abstract, slides}) => {
  const [viewAbstract, setViewAbstract] = useState(false);
  return (
    <li key={title}>
      <p>{title}</p>{' '}
      <div className={styles.indentedSection}>
        <p className={styles.fewmarginparagraph}>
          <Link href={link} target='_blank' className='linkDecor'>
            {event}
          </Link>
          . {where}, {when}.
        </p>
        {/* {abstract !== undefined ? (
          <>
            <button
              className={styles.absButton}
              onClick={() => setViewAbstract((viewAbstract) => !viewAbstract)}>
              {viewAbstract ? '-' : '+'} Abstract
            </button>
            {''}
            {viewAbstract && <div className={styles.abstract}>{abstract}</div>}
          </>
        ) : (
          ''
        )} */}
        {slides !== undefined ? (
          <>
            <Link href={slides} target='_blank' className='linkDecorButton'>
              Slides
            </Link>
          </>
        ) : (
          ''
        )}
      </div>
    </li>
  );
};

export default Talk;
