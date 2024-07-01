import React from 'react';
import Talk from '../components/Talk';

const Teaching = () => {
  return (
    <div>
      <h1>Talks</h1>
      <ol reversed>
        {/*  */}
        {/* <Talk
          title='Fourier analysis for fractal measures.'
          event='Workshop on Ergodic Theory and Fractal Geometry'
          where='University of Loughborough'
          link='https://sites.google.com/view/workshoponfractalgeometryandet/home'
          when='Jul. 2024'
          abstract='The Fourier spectrum is a family of dimensions that, for measures, live between the Fourier and Sobolev dimensions, and is defined in terms of the Fourier transform of the measure. In this talk we will extend the well-known results of Kahane and Hare—Roginskaya to define the Fourier spectrum by considering only the Fourier coefficients of measures. Joint work with Marc Carnovale and Jonathan Fraser.'
        /> */}
        <Talk
          title='Exceptional projections and dimension interpolation.'
          event='Geometry and Fractals under the Midnight Sun Conference'
          where='University of Oulu'
          link='https://midnightsun2024.gitlab.io'
          when='Jun. 2024'
          slides='/Slides/MidnightSun2024.pdf'
        />
        <Talk
          title='The Fourier spectrum under orthogonal projections.'
          event='St Andrews Analysis Seminar'
          where='University of St Andrews'
          link='https://sta-analysis.github.io/seminars/'
          when='Feb. 2024'
          abstract='Since Marstrand’s work on orthogonal projections in the 1950s, exceptional set estimates for such projections have been widely studied. Salem sets, i.e. sets for which the Fourier and Hausdorff dimension coincide, have no such exceptions. Thus, one might expect that the Fourier dimension could be used to improve exceptional set estimates. In this talk we will tackle this problem and show how the Fourier spectrum can be used to provide more information. Joint work with Jonathan Fraser.'
        />
      </ol>
    </div>
  );
};

export default Teaching;
