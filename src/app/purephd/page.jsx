import React from 'react';
import Link from 'next/link';
import Schedule from './SchedulePPS';
import HeaderEvent from './HeaderPPS';
import stylesPPS from './stylesPPS.module.css';

const Page = () => {
  return (
    <div>
      <HeaderEvent eventURL={'purephd'} photos={false} />
      <h1>Pure PhDs Seminar</h1>
      <p>
        The Pure PhDs Seminar will run every{' '}
        <strong>odd week on Wednesdays at 16:00 in Lecture Theatre D</strong> of
        the Mathematical Institute.
      </p>
      <h2>Schedule</h2>
      <ul>
        <Schedule
          time='17/09/2025'
          speaker='Speaker name'
          title='Talk title (Algebra talk)'
          abstract='Abstract here'
          // slides='/'
        />
        <br />
        <Schedule
          time='01/10/2025'
          speaker='Speaker name'
          title='Talk title (Analysis talk)'
          abstract='Abstract here'
          // slides='/'
        />
        <br />
        <Schedule
          time='15/10/2025'
          speaker='Speaker name'
          title='Talk title (Algebra talk)'
          abstract='Abstract here'
          // slides='/'
        />
        <br />
        <Schedule
          time='29/10/2025'
          speaker='Speaker name'
          title='Talk title (Analysis talk)'
          abstract='Abstract here'
          // slides='/'
        />
        <br />
        <Schedule
          time='12/11/2025'
          speaker='Speaker name'
          title='Talk title (Geometry talk)'
          abstract='Abstract here'
          // slides='/'
        />
        <br />
        <Schedule
          time='26/11/2025'
          speaker='Speaker name'
          title='Talk title (Analysis talk)'
          abstract='Abstract here'
          // slides='/'
        />
        <br />
        <Schedule
          time='10/12/2025'
          speaker='Speaker name'
          title='Talk title (Algebra talk)'
          abstract='Abstract here'
          // slides='/'
        />
        <br />
      </ul>
      <br />
    </div>
  );
};

export default Page;
