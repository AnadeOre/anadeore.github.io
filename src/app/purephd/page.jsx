import React from 'react';
import Link from 'next/link';
import Schedule from './SchedulePPS';
import HeaderEvent from './HeaderPPS';
import stylesPPS from './stylesPPS.module.css';

const Page = () => {
  return (
    <div>
      <HeaderEvent eventURL={'purephd'} photos={false} />
      <h1>Pure Maths PhDs Seminar - Spring Semester 2025-2026</h1>
      <p>
        Click{' '}
        <Link href='/purephd/martinmas2526' target='_blank'>
          here
        </Link>{' '}
        for the Autumn semester Schedule
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
          speaker='Fabian Despinoy'
          title='On Measures of Maximal Dimension'
          abstract="The dimension of a fractal set can often be understood through considering the measures that it supports. We will examine some classical dimension results in the field, moving from similarity, non-linear and then to self-affine iterated function systems while exploring the appearances measures of maximal dimension through thermodynamic formalism.  Finally, we describe a direct application of these types of measures in explaining Käenmäki's proof of a Folklore open question for dimension $d>2$"
          // slides='/'
        />
        <br />
        <Schedule
          time='25/02/2026' //ALGEBRA
          speaker='Victoria Ironmonger'
          title='Atomicity, bicycles and combinatorial dreams'
          abstract="I'll be talking about partially ordered sets (posets) of combinatorial structures (such words and graphs) in which two structures are related when one is a substructure of the other, in some sense.  Such a poset is atomic if it cannot be expressed as the union of two (proper, downward closed) subsets.  Assuming no prior knowledge, I'll introduce atomicity and outline some recent results for structures under consecutive orders."
          // slides='/'
        />
        <br />
        <Schedule
          time='11/03/2026' //ANALYSIS 
          speaker='Ana E. de Orellana'
          title='Fractal measures and the Fourier restriction problem'
          abstract='In this talk we will explore the Fourier restriction problem and its connections with Fractal geometry. We will learn about the $L^q$ dimensions as a way of capturing the “roughness” of a fractal measure, and see how these dimensions give rise to new Fourier restriction estimates.'
          // slides='/'
        />
        <br />
        <Schedule
          time='01/04/2026' //ALGEBRA
          speaker='Simun Dropuljic'
          title='Gonality Sequences of Graphs'
          abstract='In this talk, I will introduce the Baker–Norine theory of divisors on graphs through the language of chip-firing games. The focus will be on the gonality sequences, a combinatorial invariant of graphs that offers insight into their geometry. After giving definitions and examples, I will present some recent results on gonality sequences, as well as several open problems in the area.'
          // slides='/'
        />
        <br />
        <Schedule
          time='15/04/2026. (In Physics 222)' //ANALYSIS
          speaker='Yunlong Xu'
          title='Dimensions of orbital sets in complex dynamics'
          abstract='We investigate the box dimension of orbital sets in complex dynamics. In particular, we are interested in the relationship between the box dimension of the orbital set and the box dimension of the associated Julia set for any rational map with degree at least 2 defined on Riemann sphere. Joint work with Jonathan Fraser.'
          // slides='/'
        />
        <br />
        <Schedule
          time='28/04/2026' //ALGEBRA
          speaker='Theodor Thorbjornsen'
          // title='TBC'
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
