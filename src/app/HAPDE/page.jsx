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
        </Link>
        .
        <br />
        <br />
        <b>Date:</b> Tuesday 8th April 2025.
        <br />
        <br />
        <font size='3.5'>
          <b>Registration:</b> Please fill in the form{' '}
          <Link
            className='linkDecor'
            target='_blank'
            href='https://forms.gle/q4nAVk3hGoMHT7TJ7'>
            https://forms.gle/q4nAVk3hGoMHT7TJ7
          </Link>
        </font>
        <br />
        <br />
        <b>Financial support:</b> Limited financial support is available for
        early career researchers. If you require financial support, please fill
        in the registration form <em>before the 28th of March</em>.
        <br />
        <br />
        <b>Venue:</b> The workshop will take place in St Andrews at the{' '}
        <Link
          className='linkDecor'
          target='_blank'
          href='https://maps.app.goo.gl/7Jr3HiiY3dFHUn5e7'>
          School of Mathematics and Statistics
        </Link>
        . The nearest train station is Leuchars, which is a 10 minute drive to
        St Andrews. There is a regular bus service from the train station to St
        Andrews every 10 minutes.
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
            href='https://sites.google.com/view/frakhmon/home'>
            Firdavs Rakhmonov
          </Link>
          , University of St Andrews.
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
            href='https://anadeore.github.io'>
            Ana E. de Orellana
          </Link>
          , University of St Andrews.
        </li>
      </ul>
      <h2>Schedule</h2>
      <ul>
        <FoodEvent time='12:00 - 13:00' event='Lunch' />
        <br />
        <Schedule
          time='13:00 - 14:00'
          speaker='Jonathan Bennett'
          title='Wigner functions in Fourier restriction theory and beyond'
          abstract='In a celebrated 1932 paper Eugene Wigner showed that a certain phase-space distribution (later to be called the Wigner distribution, or Wigner function) of a solution $u(x,t)$ to a Schrödinger evolution equation satisfies a classical transport equation. In particular, this allows the density $|u(x,t)|^2$ of a solution to the free Schrödinger equation to be expressed as a superposition of Dirac masses on space-time lines — a property that has significant consequences in theoretical physics. In this talk we extend this phase-space (or "ray bundle") representation to more general Fourier extension operators and present some applications in harmonic analysis. Our general perspective has its origins in optics, where one is naturally interested in representing the intensity of an optical wave field as a superposition of light rays. This is joint work with Susana Gutierrez, Shohei Nakamura and Itamar Oliveira.'
          // slides='/'
        />
        <br />
        <Schedule
          time='14:00 - 15:00'
          speaker='Firdavs Rakhmonov'
          title='Exceptional projections in finite fields: Fourier analytic bounds and incidence geometry'
          abstract="We consider the problem of bounding the number of exceptional projections (projections which are smaller than typical)  of a subset of a vector space over a finite field.  We establish bounds that depend on $L^p$ estimates for the Fourier transform, improving various known bounds for sets with sufficiently good Fourier analytic properties.  The special case $p=2$ recovers a recent result of Bright and Gan (following Chen), which established the finite field analogue of Peres--Schlag's bounds from the continuous setting. 

          We prove several auxiliary results of independent interest, including a character sum identity for subspaces (solving a problem of Chen), and an analogue of Plancherel's theorem for subspaces. These auxiliary results also have applications in affine incidence geometry, that is, the problem of estimating the number of incidences between a set of points and a set of affine $k$-planes. We present a novel and direct proof of a well-known result in this area that avoids the use of spectral graph theory, and we provide simple examples demonstrating that these estimates are sharp up to constants. This is joint work with Jonathan Fraser."
          // slides='/'
        />
        {/* <br /> */}
        <FoodEvent time='15:00 - 15:30' event='Coffee Break' />
        <br />
        <Schedule
          time='15:30 - 16:30'
          speaker='Jakub Takáč'
          title='TBC'
          abstract='TBC.'
          // slides='/'
        />
        <br />
        <Schedule
          time='16:30 - 17:30'
          speaker='Ana E. de Orellana'
          title='Extending the Stein--Tomas Theorem'
          abstract='The Stein—Tomas restriction theorem establishes the connection between Fourier analysis and the geometric properties of measures. In this talk we study an extension of this theorem using the Fourier spectrum, a family of dimensions that live between the Fourier and Hausdorff dimensions. This leads to a restriction estimate on the cone, which although not sharp, is better than Stein—Tomas’ in all dimensions. Joint work with Marc Carnovale and Jonathan Fraser.'
        />
      </ul>
      <br />
      After this we will go to the pub and then dinner.
    </div>
  );
};

export default Page;
