import React from 'react';
import Talk from '../components/Talk';

const Teaching = () => {
  return (
    <div>
      <h1>Talks</h1>
      <h2>Future</h2>
      <ol reversed>
        {/*  */}
        <Talk
          title='Orthogonal projections and the Fourier spectrum.'
          event='Afternoon workshop on Fourier analysis, fractals, and finite fields'
          where='University of St Andrews, UK'
          link='https://jonathan-fraser.github.io/homepage/FFFF.html'
          when='Sep. 2024'
          abstract='It is well-known that when sets have the same Fourier and Hausdorff dimensions there are no exceptions to Marstrand’s projection theorem. In this talk we will show how we can use the method of dimension interpolation to improve the state of the art estimates for the Hausdorff dimension of the exceptional set of projections in higher dimensions. Joint work with Jonathan Fraser.'
        />
        <Talk
          title='The continuity of exceptional estimates for orthogonal projections.'
          event='Fractal Geometry and Stochastics 7'
          where='Chemnitz, Germany'
          link='https://www.tu-chemnitz.de/mathematik/stochastik/fgs7/index.html'
          when='Sep. 2024'
          abstract='Since Marstrand’s work on orthogonal projections, exceptional set estimates for such projections have been widely studied. Salem sets, i.e. sets for which the Fourier and Hausdorff dimension coincide, have no such exceptions, but using the Fourier dimension alone to improve exceptional set estimates leads to discontinuous bounds. In this talk we will see what conditions we need on the Fourier decay of measures to ensure continuity of the bounds.'
        />
        <Talk
          title='TBC.'
          event='University of Edinburgh Analysis Seminar'
          where='University of Edinburgh, UK'
          link='https://blogs.ed.ac.uk/analysis/analysis-seminar/'
          when='Sep. 2024'
          // abstract='Since Marstrand’s work on orthogonal projections, exceptional set estimates for such projections have been widely studied. Salem sets, i.e. sets for which the Fourier and Hausdorff dimension coincide, have no such exceptions, but using the Fourier dimension alone to improve exceptional set estimates leads to discontinuous bounds. In this talk we will see what conditions we need on the Fourier decay of measures to ensure continuity of the bounds.'
        />
        <Talk
          title='Orthogonal projections and a continuum of dimensions.'
          event='University of Birmingham Analysis Seminar'
          where='University of Birmingham, UK'
          link='https://www.birmingham.ac.uk/research/activity/mathematics/analysis'
          when='Oct. 2024'
          abstract='It is well-known that when sets have the same Fourier and Hausdorff dimensions there are no exceptions to Marstrand’s projection theorem. In this talk we will show how we can use the method of dimension interpolation to improve the state of the art estimates for the Hausdorff dimension of the exceptional set of projections in higher dimensions. Joint work with Jonathan Fraser.'
        />
        <Talk
          title='Orthogonal projections and a continuum of dimensions.'
          event='Online analysis seminar'
          where='Shenzhen Technology University, China'
          link='https://bdi.sztu.edu.cn/index.htm'
          when='Oct. 2024'
          // abstract='It is well-known that when sets have the same Fourier and Hausdorff dimensions there are no exceptions to Marstrand’s projection theorem. In this talk we will show how we can use the method of dimension interpolation to improve the state of the art estimates for the Hausdorff dimension of the exceptional set of projections in higher dimensions. Joint work with Jonathan Fraser.'
        />
      </ol>
      <h2>Past</h2>
      <ol reversed>
        {/*  */}
        <Talk
          title='Projection theorems and the Fourier spectrum.'
          event='Workshop on the Geometry of Deterministic and Random Fractals II'
          where='Rényi Institute, Budapest, Hungary'
          link='https://erdoscenter.renyi.hu/events/workshop-geometry-deterministic-and-random-fractals-ii'
          when='Sep. 2024'
          abstract='The Fourier spectrum is a family of dimensions that interpolates between the Fourier and Hausdorff dimensions and helps us understand how they are connected. In this talk we will see how it proves useful to get sharper results for bounds regarding the Hausdorff dimension in situations where the Fourier dimension alone is not enough to capture the effect of the Fourier transform of measures. Joint work with Jonathan Fraser.'
          slides='/Slides/Budapest2024.pdf'
        />
        <Talk
          title='Fourier analysis for fractal measures.'
          event='Workshop on Ergodic Theory and Fractal Geometry'
          where='University of Loughborough, UK'
          link='https://sites.google.com/view/workshoponfractalgeometryandet/home'
          when='Jul. 2024'
          abstract='The Fourier spectrum is a family of dimensions that, for measures, live between the Fourier and Sobolev dimensions, and is defined in terms of the Fourier transform of the measure. In this talk we will extend the well-known results of Kahane and Hare—Roginskaya to define the Fourier spectrum by considering only the Fourier coefficients of measures. Joint work with Marc Carnovale and Jonathan Fraser.'
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
          abstract='Since Marstrand’s work on orthogonal projections in the 1950s, exceptional set estimates for such projections have been widely studied. Salem sets, i.e. sets for which the Fourier and Hausdorff dimension coincide, have no such exceptions. Thus, one might expect that the Fourier dimension could be used to improve exceptional set estimates. In this talk we will tackle this problem and show how the Fourier spectrum can be used to provide more information. Joint work with Jonathan Fraser.'
        />
      </ol>
    </div>
  );
};

export default Teaching;
