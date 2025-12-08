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
          time='29/10/2025'
          speaker='Boyuan Zhao'
          title='Convergence rate for Birkhoff spectrum of non-integrable observables'
          abstract='For a probability preserving system $(X,T,\mu)$ and an $L^1$ observable $\tau$, the Birkhoff ergodic theorem asserts that for a full measure set of points in $X$, the ergodic averages $\frac1n S_n\tau(x)=\frac1n \sum_{i=0}^{n-1}\tau(T^ix)$ converges to the space average $\int\tau d\mu$. However, one can study the multifractal spectrum, i.e. Hausdorff dimension of the level sets (which have measure zero): $J(\alpha):=\left\{x\in X: \lim_{n\to\infty}\frac1n S_n\tau(x)=\alpha\right\}$. Using thermodynamic formalism results, one can obtain an explicit formula for $b(\alpha):=\dim_H(J(\alpha))$. Although the conclusion of Birkhoff ergodic theorem fails for non-integrable observables, similar approaches can be applied together with basic calculus to obtain the rate of convergence of the dimension of level sets to full dimension.'
          // slides='/'
        />
        <br />
        <Schedule
          time='12/11/2025'
          speaker='Dr. Thibault Poiret'
          title='Parametrizing spaces and limits of shapes'
          abstract='A lot of modern algebraic geometry is about understanding the geometry of moduli spaces. These are spaces parametrizing objects of a certain type $T$. When $T$ consists of smooth objects, the moduli space is often not compact, because "families of smooth things want to converge to non-smooth things". I will talk about some of the most important and well-studied moduli spaces, and some tricks to deal with the non-compactness issue.'
          // slides='/'
        />
        <br />
        <Schedule
          time='26/11/2025'
          speaker='Lijian Yang'
          title='Fourier Dimension and Kakeya-Type Sets in the Plane'
          abstract='The Fourier dimension of a Borel set is defined in terms of the decay rate of the Fourier transform of measures supported on the set. Roughly speaking, it measures how "smoothly" the mass of the set is distributed in frequency space. The Fourier dimension, originally motivated by the Hausdorff dimension, is always less than or equal to the Hausdorff dimension. In this talk, we will discuss several properties of the Fourier dimension and compute it for some examples. In particular, we will show that the Fourier dimension of any Kakeya set in the plane is 2. We will also examine the range of possible Fourier dimensions for certain restricted Kakeya-type sets in the plane.'
          // slides='/'
        />
        <br />
        <Schedule
          time='10/12/2025'
          speaker='Yayi Zhu'
          title="Green's $J$-relation and the presentations for transformation semigroups"
          abstract="Green's $J$-relation partition transformation semigroups (the full transformation semigroup $\mathcal{T}_n$, the symmetric inverse monoid $\mathcal{I}_n$, and the partial transformation semigroup $\mathcal{PT}_n$) into $J$-classes in a nice way, where all (partial) maps in one $J$-class are of the same rank, and the $J$-classes form a chain. In this talk we go through some classical presentations for $\mathcal{T}_n$, $\mathcal{I}_n$, and some more recent research on their ideals. We then discuss the position (in the chain of $J$-classes) of the relations required in any presentation for the above semigroups, by specifying their 'depth'."
          // slides='/'
        />
        <br />
      </ul>
      <br />
    </div>
  );
};

export default Page;
