import React from 'react';
import styles from '../styles/list.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Teaching = () => {
  return (
    <div>
      <Header />
      <h1>Teaching</h1>
      <ul>
        <li>
          <h3>2025-2026: University of St Andrews</h3>
          <div className={styles.indentedSection}>
            <p>
              Tutor for MT2502: Analysis (5 tutorials + 3 examples classes),
              Autumn.
            </p>
            <p>
              Tutor for MT1001: Introductory Mathematics (2 tutorials), Autumn.
            </p>
          </div>
        </li>
        <li>
          <h3>2024-2025: University of St Andrews</h3>
          <div className={styles.indentedSection}>
            <p>Tutor for MT1003: Mathematics (3 tutorials), Spring.</p>
            <p>
              Tutor for MT1002: Mathematics (3 tutorials + 2 examples classes),
              Spring.
            </p>
            <p>
              Tutor for MT2502: Analysis (3 tutorials + 2 examples classes),
              Autumn.
            </p>
            <p>
              Tutor for MT1001: Introductory Mathematics (3 tutorials), Autumn.
            </p>
          </div>
        </li>
        {/*  */}
        <li>
          <h3>2023-2024: University of St Andrews</h3>
          <div className={styles.indentedSection}>
            <p>
              Tutor for MT1003: Pure and Applied Mathematics (2 tutorials + 2
              examples classes), Spring.
            </p>
            <p>
              Tutor for MT2502 Analysis: (2 tutorials + 2 examples classes),
              Autumn.
            </p>
          </div>
        </li>
        <li>
          <h3>2023: Universidad Nacional del Litoral</h3>
          <div className={styles.indentedSection}>
            <p>Tutor for "Matemática A", 1° Semester.</p>
            <p>Tutor for "Matemática Básica", 1° Semester.</p>
            <p>Tutor for Engineering entrants, University Admissions Period.</p>
          </div>
        </li>
        {/*  */}
        <li>
          <h3>2022: Universidad Nacional del Litoral</h3>
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
