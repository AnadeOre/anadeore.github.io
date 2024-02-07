import React from 'react';
import styles from '../styles/list.module.css';
import Link from 'next/link';

const Talk = ({title, where, link, when}) => {
  return (
    <li>
      <p>{title}.</p>
      <div className={styles.indentedSection}>
        <p className={styles.fewmarginparagraph}>
          <Link href={link} target='_blank' className='linkDecor'>
            {where}
          </Link>
          , {when}.
        </p>
      </div>
    </li>
  );
};

export default Talk;
