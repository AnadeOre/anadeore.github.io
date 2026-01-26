import React from 'react';
import Link from 'next/link';
import Schedule from './SchedulePPS';
import HeaderEvent from './HeaderPPS';
import stylesPPS from './stylesPPS.module.css';

const Page = () => {
  return (
    <div>
      <HeaderEvent eventURL={'purephdSem1'} photos={false} />
      <h1>Pure Maths PhDs Seminar - Candlemas Semester 2025-2026</h1>
      <p>
        Click{' '}
        <Link href='/purephdSem1' target='_blank'>
          here
        </Link>{' '}
        for the Martinmas semester Schedule
      </p>
      <p>
        The Pure PhDs Seminar will run every{' '}
        <strong>odd week on Wednesdays at 16:00 in Lecture Theatre C</strong> of
        the Mathematical Institute. We will meet in the staff room at 15:30 for
        tea and biscuits.
      </p>
      <h2>Schedule</h2>
      <ul>
        <Schedule
          time='11/02/2026' //ANALYSIS (Fabian?)
          speaker='TBC'
          title='TBC'
          // abstract='TBC'
          // slides='/'
        />
        <br />
        <Schedule
          time='25/02/2026' //ALGEBRA
          speaker='TBC'
          title='TBC'
          // abstract='TBC'
          // slides='/'
        />
        <br />
        <Schedule
          time='18/03/2026' //ANALYSIS (Firdavs?)
          speaker='TBC'
          title='TBC'
          // abstract='TBC'
          // slides='/'
        />
        <br />
        <Schedule
          time='01/04/2026' //ALGEBRA
          speaker='TBC'
          title='TBC'
          // abstract='TBC'
          // slides='/'
        />
        <br />
        <Schedule
          time='15/04/2026' //ANALYSIS
          speaker='TBC'
          title='TBC'
          // abstract='TBC'
          // slides='/'
        />
        <br />
        <Schedule
          time='29/04/2026' //ALGEBRA
          speaker='TBC'
          title='TBC'
          // abstract="TBC"
          // slides='/'
        />
        <br />
      </ul>
      <br />
    </div>
  );
};

export default Page;
