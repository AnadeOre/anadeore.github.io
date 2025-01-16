'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/list.module.css';
import stylesHAPDE from './stylesHAPDE.module.css';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

import {SlArrowDown, SlArrowUp} from 'react-icons/sl';

const Schedule = ({time, title, abstract, slides, speaker}) => {
  const [viewAbstract, setViewAbstract] = useState(false);
  return (
    <li key={title}>
      <div>
        <span className={stylesHAPDE.times}>{time}:</span>{' '}
        <span className={stylesHAPDE.speaker}>{speaker}</span>
      </div>
      <span>{'   '}</span>
      <b>{title}</b>
      <span>{'   '}</span>
      {abstract !== undefined ? (
        <>
          <button
            className={styles.absButtonPubli}
            onClick={() => setViewAbstract((viewAbstract) => !viewAbstract)}>
            {viewAbstract ? <SlArrowUp /> : <SlArrowDown />}
          </button>
          {''}
          {viewAbstract && (
            <div className={styles.abstractPubli}>
              <Latex>Abstract: {abstract}</Latex>
            </div>
          )}
        </>
      ) : (
        ''
      )}
      {/* (
      {slides && (
        <Link href={slides} target='_blank' className='linkDecor'>
          download slides
        </Link>
      )}
      ) */}
      <br />
      {/* {abstract && <div className={styles.abstractPubli}>{abstract}</div>} */}
    </li>
  );
};

export default Schedule;
