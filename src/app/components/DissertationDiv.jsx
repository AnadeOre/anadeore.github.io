import React from 'react';
import Link from 'next/link';
import styles from '../styles/list.module.css';

const DissertationDiv = ({
  title,
  where,
  wherelink,
  info,
  linkURL,
  linkDesc,
}) => {
  return (
    <div>
      <h4>{title}</h4>
      <div className={styles.indentedSection}>
        <Link className='linkDecor' target='_blank' href={linkURL}>
          {linkDesc}
        </Link>
        .
        <p className={styles.marginparagraph}>
          {info}. At{' '}
          <Link className='linkDecor' target='_blank' href={wherelink}>
            {where}
          </Link>
          , Mar. 2023.
        </p>
      </div>
    </div>
  );
};

export default DissertationDiv;
