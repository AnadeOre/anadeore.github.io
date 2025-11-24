import React from 'react';
import styles from '../styles/list.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Teaching = () => {
  const style = {
    color: 'white',
    fontSize: 16,
    fontWeight: 1,
  };
  return (
    <div>
      <Header />
      <h1>Teaching</h1>
      <ul>
        <li>
          <h3>
            Academic Tutor and Demonstrator:{' '}
            <span style={style}>Sep. 2023 - Dec. 2025</span>
          </h3>
          <div className={styles.indentedSection}>
            <p>
              Tutor at the University of St Andrews for a variety of pure and
              applied undergraduate mathematics modules. Marking summative and
              formative assessment for over 150 students. Demonstrator for over
              550 students in examples classes.
            </p>
          </div>
        </li>
        <li>
          <h3>
            Lecturer: <span style={style}>Feb. 2023</span>
          </h3>

          <div className={styles.indentedSection}>
            <p>
              Lecturer at the Universidad Nacional del Litoral's `Summer School'
              for entrance level students studying core mathematics modules.
              Lectured two groups of 70 students twice per week in two-hour
              sessions.
            </p>
          </div>
        </li>
        <li>
          <h3>
            Teaching Assistant <span style={style}>Aug. 2022 - Mar. 2023</span>
          </h3>
          <div className={styles.indentedSection}>
            <p>
              Lecturer at the Universidad Nacional del Litoral's `Summer School'
              for entrance level students studying core mathematics modules.
              Lectured two groups of 70 students twice per week in two-hour
              sessions.
            </p>
          </div>
        </li>
        <li>
          <h3>
            Educational Outreach:{' '}
            <span style={style}>Mar. 2017 - Dec. 2018</span>
          </h3>

          <div className={styles.indentedSection}>
            <p>
              Collaborating with the Universidad Nacional del Litoral, providing
              one-to-one tuition in a variety of STEM subjects to less affluent
              members of the community.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Teaching;
