import React from 'react';
import Header from '../components/Header';
import Talk from '../components/Talk';

const Teaching = () => {
  return (
    <div>
      <Header />
      <h1>Talks</h1>
      <h2>Future</h2>
      <ol start='18' reversed>
        <Talk
          title='An introduction to the Fourier restriction problem for fractal sets'
          event='Dynamical Systems seminar'
          where='Uppsala Universitet, Sweden'
          link='https://www.uu.se/en/department/mathematics/research/dynamical-systems-and-number-theory/seminar-series-in-dynamical-systems-and-number-theory'
          when='Oct. 2026'
        />
      </ol>
      <h2>Past</h2>
      <ol reversed>
        <Talk
          title='Finding 3APs in fractal sets'
          event='Interactions Between Fractal Geometry, Harmonic Analysis, and Dynamical Systems - Workshop 1'
          where='Institut Mittag-Leffler'
          link='https://www.mittag-leffler.se/activities/interactions-between-fractal-geometry-harmonic-analysis-and-dynamical-systems/#program'
          when='Sep. 2026'
        />
        <Talk
          title='Fourier restriction and a continuum of dimensions'
          event='Fractals and Related Fields V'
          where='Porquerolles Island, France'
          link='https://farf5.math.cnrs.fr'
          when='Jun. 2026'
          slides='/Slides/FARF5.pdf'
        />
        <Talk
          title='Multifractal measures and the Fourier restriction problem'
          event='Workshop in Geometric Measure Theory and Metric Geometry'
          where='University of Warwick, UK'
          link='https://sites.google.com/view/emanuelecaputo/home-page/conference-geometric-measure-theory-and-metric-geometry'
          when='Mar. 2026'
        />
        <Talk
          title='Fourier restriction and fractal dimensions'
          event='Workshop on Regularity Theory of PDEs and Calculus of Variations'
          where='University of Essex, UK'
          link='https://www.essex.ac.uk/events/2025/06/16/pdesatessex2025'
          when='Jun. 2025'
        />
        <Talk
          title='Extending the Stein--Tomas theorem'
          event='Afternoon Workshop in Harmonic Analysis and PDEs'
          where='University of St Andrews, UK'
          link='https://anadeore.github.io/HAPDE'
          when='Apr. 2025'
        />
        <Talk
          title='Dimension interpolation and restriction theorems.'
          event="Young Functional Analysts' Workshop"
          where='University of Glasgow, UK'
          link='https://sites.google.com/view/yfaw2025/home'
          when='Apr. 2025'
        />
        <Talk
          title='Fourier restriction for multifractals.'
          event='Ergodic Theory and Dynamical Systems Seminar'
          where='University of Bristol, UK'
          link='https://www.bristolmathsresearch.org/events/ergodic-theory-and-dynamical-systems/'
          when='Mar. 2025'
        />
        <Talk
          title='A new perspective on the Stein--Tomas Theorem.'
          event='One World Fractals'
          where='University of St Andrews (online), UK'
          link='https://www.oneworldfractals.org/past/owf20241127/'
          when='Nov. 2024'
          slides='/Slides/OWF2024.pdf'
        />
        <Talk
          title='Orthogonal projections and a continuum of dimensions.'
          event='University of Birmingham Analysis Seminar'
          where='University of Birmingham, UK'
          link='https://www.birmingham.ac.uk/research/activity/mathematics/analysis'
          when='Oct. 2024'
        />
        <Talk
          title='Fourier analytic methods for orthogonal projections.'
          event='Online Analysis Seminar'
          where='Shenzhen Technology University, China (online)'
          link='https://bdi.sztu.edu.cn/index.htm'
          when='Oct. 2024'
          slides='/Slides/Shenzhen2024.pdf'
        />
        <Talk
          title='Dimension interpolation and exceptional set estimates.'
          event='University of Edinburgh Analysis Seminar'
          where='University of Edinburgh, UK'
          link='https://blogs.ed.ac.uk/analysis/analysis-seminar/'
          when='Sep. 2024'
        />
        <Talk
          title='The continuity of exceptional estimates for orthogonal projections.'
          event='Fractal Geometry and Stochastics 7'
          where='Chemnitz, Germany'
          link='https://www.tu-chemnitz.de/mathematik/stochastik/fgs7/index.html'
          when='Sep. 2024'
          slides='/Slides/Chemnitz2024.pdf'
        />
        <Talk
          title='Orthogonal projections and the Fourier spectrum.'
          event='Afternoon Workshop on Fourier Analysis, Fractals, and Finite Fields'
          where='University of St Andrews, UK'
          link='https://jonathan-fraser.github.io/homepage/FFFF.html'
          when='Sep. 2024'
        />
        <Talk
          title='Projection theorems and the Fourier spectrum.'
          event='Workshop on the Geometry of Deterministic and Random Fractals II'
          where='Rényi Institute, Budapest, Hungary'
          link='https://erdoscenter.renyi.hu/events/workshop-geometry-deterministic-and-random-fractals-ii'
          when='Sep. 2024'
          slides='/Slides/Budapest2024.pdf'
        />
        <Talk
          title='Fourier analysis for fractal measures.'
          event='Workshop on Ergodic Theory and Fractal Geometry'
          where='University of Loughborough, UK'
          link='https://sites.google.com/view/workshoponfractalgeometryandet/home'
          when='Jul. 2024'
        />
        <Talk
          title='Exceptional projections and dimension interpolation.'
          event='Geometry and Fractals under the Midnight Sun Conference'
          where='University of Oulu, Finland'
          link='https://midnightsun2024.gitlab.io'
          when='Jun. 2024'
          slides='/Slides/MidnightSun2024.pdf'
        />
        <Talk
          title='The Fourier spectrum under orthogonal projections.'
          event='St Andrews Analysis Seminar'
          where='University of St Andrews, UK'
          link='https://sta-analysis.github.io/seminars/'
          when='Feb. 2024'
        />
      </ol>
    </div>
  );
};

export default Teaching;
