import React from 'react';
import Link from 'next/link';
import Schedule from './ScheduleHAPDE';
import CoffeBreak from './FoodEvent';
import HeaderEvent from './HeaderEvent';
import Footer from '../components/Footer';
import stylesHAPDE from './stylesHAPDE.module.css';
import CoffeeBreak from './FoodEvent';
import FoodEvent from './FoodEvent';

const Page = () => {
  return (
    <div>
      <HeaderEvent />
      <h1>Harmonic Analysis & PDE network</h1>
      <p>
        We will host an afternoon workshop in St Andrews as part of the{' '}
        <Link
          className='linkDecor'
          target='_blank'
          href='https://sites.google.com/view/lms-hanpde-network/home'>
          HAPDE network
        </Link>{' '}
        on Tuesday 8th April 2025.
      </p>
      {/* <br /> */}
      <h3>Local organisers</h3>
      <ul className={stylesHAPDE.ul}>
        <li>Jonathan Fraser.</li>
        <li>Ana E. de Orellana.</li>
      </ul>
      <h3>Speakers</h3>
      <ul className={stylesHAPDE.ul}>
        <li>
          <Link
            className='linkDecor'
            target='_blank'
            href='https://www.birmingham.ac.uk/staff/profiles/maths/bennett-jonathan'>
            Jonathan Bennett
          </Link>
          , University of Birmingham.
        </li>
        <li>
          <Link
            className='linkDecor'
            target='_blank'
            href='https://warwick.ac.uk/fac/sci/maths/people/staff/takac/'>
            Jakub Takáč
          </Link>
          , University of Warwick.
        </li>
        <li>
          <Link
            className='linkDecor'
            target='_blank'
            href='https://sites.google.com/view/frakhmon/home'>
            Firdavs Rakhmonov
          </Link>
          , University of St Andrews.
        </li>
      </ul>
      <h2>Schedule</h2>
      <ul>
        <FoodEvent time='12:00 - 13:30' event='Lunch' />
        <br />
        <Schedule
          time='13:30 - 14:30'
          speaker='Jonathan Bennett'
          title='TBC'
          abstract='TBC.'
          // slides='/'
        />
        <br />
        <Schedule
          time='14:30 - 15:30'
          speaker='Firdavs Rakhmonov'
          title='TBC'
          abstract='TBC.'
          // slides='/'
        />
        <br />
        <FoodEvent time='15:30 - 16:00' event='Coffee Break' />
        <br />
        <Schedule
          time='16:00 - 17:00'
          speaker='Jakub Takáč'
          title='TBC'
          abstract='TBC.'
          // slides='/'
        />
      </ul>
      <br />
      After this we will go to the pub and then dinner.
    </div>
  );
};

export default Page;
