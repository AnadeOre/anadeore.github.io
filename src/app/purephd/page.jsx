import React from 'react';
import Link from 'next/link';
import Schedule from './SchedulePPS';
import HeaderEvent from './HeaderPPS';
import stylesPPS from './stylesPPS.module.css';

const Page = () => {
  return (
    <div>
      <HeaderEvent eventURL={'purephd'} photos={false} />
      <h1>Pure Maths PhDs Seminar</h1>
      <p>
        The Pure PhDs Seminar will run every{' '}
        <strong>odd week on Wednesdays at 16:00 in Lecture Theatre C</strong> of
        the Mathematical Institute. We will meet in the staff room at 15:30 for
        tea and biscuits.
      </p>
      <h2>Schedule</h2>
      <ul>
        {/* <Schedule {/% This one was removed because we don't have room on week 1%/}
          time='17/09/2025'
          speaker='Speaker name'
          title='Talk title (Algebra talk)'
          abstract='Abstract here'
          // slides='/'
        />
        <br /> */}
        <Schedule
          time='01/10/2025'
          speaker='Saeed Shaabanian'
          title='How fast does an orbit become dense in countable Markov shifts?'
          abstract='Consider a set consisting of countable sequences over the alphabet of natural numbers. We assume a dynamic on this set given by the shift map, which moves each component of a sequence one step to the left. By the orbit of a point, we mean the iterations of the shift map on that point. It has long been known that such orbits become dense in the system; however, in this talk, we will explore the question of the rate at which this denseness occurs.'
          // slides='/'
        />
        <br />
        <Schedule
          time='15/10/2025'
          speaker='Jung Won Cho'
          title='Inverse semigroups and free inverse semigroups'
          abstract='An inverse semigroup is an algebraic structure which sits between a group and a semigroup. In the past, inverse semigroups were sometimes called generalised groups. A non-trivial fact about inverse semigroups is that free inverse semigroups exist (Schein (1963)). There are a few different ways to represent free inverse semigroups and we will see that just describing elements of free inverse semigroups is more complicated compared to elements of free groups or free semigroups. In this talk, I will start with an introduction to inverse semigroups with motivation and history. Then, we will see some combinatorial results about free inverse semigroups and their (inverse) subsemigroups.'
          // slides='/'
        />
        <br />
        <Schedule
          time='29/10/2025  (in Physics room 233)'
          speaker='Boyuan Zhao'
          title='Convergence rate for Birkhoff spectrum of non-integrable observables'
          abstract='For a probability preserving system $(X,T,\mu)$ and an $L^1$ observable $\tau$, the Birkhoff ergodic theorem asserts that for a full measure set of points in $X$, the ergodic averages $\frac1n S_n\tau(x)=\frac1n \sum_{i=0}^{n-1}\tau(T^ix)$ converges to the space average $\int\tau d\mu$. However, one can study the multifractal spectrum, i.e. Hausdorff dimension of the level sets (which have measure zero): $J(\alpha):=\left\{x\in X: \lim_{n\to\infty}\frac1n S_n\tau(x)=\alpha\right\}$. Using thermodynamic formalism results, one can obtain an explicit formula for $b(\alpha):=\dim_H(J(\alpha))$. Although the conclusion of Birkhoff ergodic theorem fails for non-integrable observables, similar approaches can be applied together with basic calculus to obtain the rate of convergence of the dimension of level sets to full dimension.'
          // slides='/'
        />
        <br />
        <Schedule
          time='12/11/2025'
          speaker='Dr Thibault Poiret'
          title='TBC'
          abstract='TBC'
          // slides='/'
        />
        <br />
        <Schedule
          time='26/11/2025'
          speaker='Lijian Yang'
          title='TBC'
          abstract='TBC'
          // slides='/'
        />
        <br />
        <Schedule
          time='10/12/2025'
          speaker='Victoria Ironmonger'
          title='TBC'
          abstract='TBC'
          // slides='/'
        />
        <br />
      </ul>
      <br />
    </div>
  );
};

export default Page;
