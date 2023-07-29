import React from 'react';
import Link from 'next/link';
import styles from '../styles/list.module.css';

const DissertationDiv = ({title, description, linkURL, linkDesc}) => {
  return (
    <li>
      <h3>{title}</h3>
      <div className={styles.indentedSection}>
        <p className={styles.description}>{description}</p>
        <Link className='linkDecor' target='_blank' href={linkURL}>
          {linkDesc}
        </Link>
      </div>
    </li>
  );
};

export default DissertationDiv;
