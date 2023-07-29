import React from 'react';
import Link from 'next/link';
import styles from '../styles/dissertation.module.css';

const DissertationDiv = ({title, description, linkURL, linkDesc}) => {
  return (
    <li>
      <h4>{title}</h4>
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
