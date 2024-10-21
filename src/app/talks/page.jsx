import React from 'react';
import Header from '../components/Header';
import Talk from '../components/Talk';

const Teaching = () => {
  return (
    <div>
      <Header />
      <h1>Talks</h1>
      <h2>Future</h2>
      <ol reversed>
        {/*  */}
        <Talk
          title='TBC'
          event='One World Fractals'
          where='University of St Andrews (online)'
          link='https://www.oneworldfractals.org/next/'
          when='Nov. 2024'
        />
      </ol>
      <h2>Past</h2>
      <ol reversed>
        {/*  */}
        <Talk
          title='Orthogonal projections and a continuum of dimensions.'
          event='University of Birmingham Analysis Seminar'
          where='University of Birmingham, UK'
          link='https://www.birmingham.ac.uk/research/activity/mathematics/analysis'
          when='Oct. 2024'
        />
        <Talk
          title='Fourier analytic methods for orthogonal projections.'
          event='Online analysis seminar'
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
          event='Afternoon workshop on Fourier analysis, fractals, and finite fields'
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
