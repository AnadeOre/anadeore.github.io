import React from 'react';
import styles from '../styles/list.module.css';

const Teaching = () => {
  return (
    <div>
      <h1>Teaching</h1>
      <ul>
        {/*  */}
        <li>
          <h3>2023</h3>
          <div className={styles.indentedSection}>
            <p>Tutor for "Matemática A", 1° Semester.</p>
            <p>Tutor for "Matemática Básica", 1° Semester.</p>
            <p>Tutor for Engineering entrants, University Admissions Period.</p>
          </div>
        </li>
        {/*  */}
        <li>
          <h3>2022</h3>
          <div className={styles.indentedSection}>
            <p>Tutor for "Cálculo 1", 2° Semester.</p>
            <p>Tutor for "Matemática Discreta", 2° Semester.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Teaching;
