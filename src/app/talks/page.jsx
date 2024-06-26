import React from 'react';
import Talk from '../components/Talk';
import Footer from '../components/Footer';

const Teaching = () => {
  return (
    <div>
      <h1>Talks</h1>
      <ol reversed>
        {/*  */}
        {/* <Talk
          title='Fourier transforms and orthogonal projections'
          event='Workshop on Ergodic Theory and Fractal Geometry'
          where='University of Loughborough'
          link='https://sites.google.com/view/workshoponfractalgeometryandet/home'
          when='Jul. 2024'
          abstract='Exceptional set estimates for orthogonal projections have been widely studied since Marstrand’s paper in the 1950s. However, it is easy to see that Salem sets, i.e. sets for which the Fourier and Hausdorff dimension coincide, have no exceptional projections. With that, one might expect that the Fourier dimension could be used to improve exceptional set estimates for the projection. In this talk we will answer this question with the help of the Fourier spectrum, a family of dimensions that interpolate between the Fourier and Hausdorff dimensions. We will see how this family of dimensions proves useful to obtain continuity results for the dimension of the exceptional set.'
        />
        <Talk
          title='Exceptional projections and dimension interpolation'
          event='Geometry and Fractals under the Midnight Sun Conference'
          where='University of Oulu'
          link='https://midnightsun2024.gitlab.io'
          when='Jun. 2024'
          abstract='It is well-known that for Salem sets, i.e. sets that have the same Fourier and Hausdorff dimensions; there are no exceptions to Marstrand’s projection theorem. In this talk we will  show how we can use the method of dimension interpolation to improve the best known estimates for the Hausdorff dimension of the exceptional set of projections. Joint work with Jonathan Fraser.'
        /> */}
        <Talk
          title='The Fourier spectrum under orthogonal projections'
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
