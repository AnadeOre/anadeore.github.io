import React from 'react';
import Link from 'next/link';
import DissertationDiv from '../components/DissertationDiv';
import PublicationLi from '../components/PublicationLi';
import Header from '../components/Header';

const Page = () => {
  return (
    <div>
      <Header />
      <h1>Research</h1>
      <p>
        I'm interested in how tools from Fourier analysis can reveal information
        about how structured/random sets are. 'Traditional' notions of dimension
        describe how fractal sets are distributed in space, but the Fourier
        dimension gives us information about how structured the sets are, from
        an arithmetical point of view. This perspective connects with many
        classical themes in fractal geometry, such as orthogonal projections,
        and distance sets.
        <br />
        At the same time, fractal sets are themselves a natural space in which
        we can revisit questions from harmonic analysis. Many problems change
        their character when posed on fractal measures rather than on smooth
        ones. This shift often brings new phenomena into light. I'm interested
        in exploring how ideas from dimension theory can shed light on
        restriction-type problems for fractal measures.
      </p>
      <div>
        <b>My identifiers:</b>{' '}
        <Link
          className='linkDecor'
          href='https://orcid.org/0009-0005-6958-896X'
          target='_blank'>
          ORCID
        </Link>
        ,{' '}
        <Link
          className='linkDecor'
          href='http://arxiv.org/a/deorellana_a_1'
          target='_blank'>
          arXiv
        </Link>
        ,{' '}
        <Link
          className='linkDecor'
          href='https://scholar.google.co.uk/citations?user=U6vkEe4AAAAJ&hl=en&oi=ao'
          target='_blank'>
          Google Scholar
        </Link>
        .
      </div>
      <h3>Preprints</h3>
      <ol start='3' reversed>
        <PublicationLi
          title=' $L^2$ restriction estimates from the Fourier spectrum'
          coauthors={[
            {
              name: 'M. Carnovale',
              website: '',
            },
            {
              name: 'J. M. Fraser',
              website: 'https://jonathan-fraser.github.io/homepage/',
            },
          ]}
          year='2024'
          arxiv='https://arxiv.org/abs/2412.14896'
          abstract='The Stein--Tomas  restriction theorem is an important  result in Fourier restriction theory.  It gives a range of $q$  for which $L^q\to L^2$ restriction estimates hold for a given measure, in terms of the Fourier and Frostman dimensions of the measure. We generalise this result by using the Fourier spectrum; a family of dimensions that interpolate between the Fourier and Sobolev dimensions for measures.  This gives us a continuum of Stein--Tomas type estimates, and optimising over this continuum gives a new $L^q\to L^2$ restriction theorem which often outperforms the Stein--Tomas result.  We also provide results in the other direction by giving a range of $q$ in terms of the Fourier spectrum for which $L^q\to L^2$ restriction estimates fail, generalising an observation  of Hambrook and Łaba.  We illustrate our results with several examples, including the surface measure on the cone, the moment curve, and several fractal measures..'
        />
      </ol>
      <h3>To appear</h3>
      <ol reversed>
        <PublicationLi
          title='Obtaining the Fourier spectrum via Fourier coefficients'
          coauthors={[
            {
              name: 'M. Carnovale',
              website: '',
            },
            {
              name: 'J. M. Fraser',
              website: 'https://jonathan-fraser.github.io/homepage/',
            },
          ]}
          year='2024'
          tap='to appear'
          journal='Proceedings of the American Mathematical Society'
          arxiv='https://arxiv.org/abs/2403.12603'
          abstract='The Fourier spectrum is a family of dimensions that interpolates between the Fourier and Hausdorff dimensions and are defined in terms of certain energies which capture Fourier decay. In this paper we obtain a convenient discrete representation of those energies using the Fourier coefficients. As an example application, we use this representation to establish sharp bounds for the Fourier spectrum of a general measure with bounded support, improving previous estimates of the second-named author.'
        />
        <PublicationLi
          title='A Fourier analytic approach to exceptional set estimates for orthogonal projections'
          coauthors={[
            {
              name: 'J. M. Fraser',
              website: 'https://jonathan-fraser.github.io/homepage/',
            },
          ]}
          year='2024'
          tap='to appear'
          journal='Indiana University Mathematics Journal'
          arxiv='https://arxiv.org/abs/2404.11179'
          abstract="Marstrand's celebrated projection theorem gives the Hausdorff dimension of the orthogonal projection of a Borel set in Euclidean space for almost all orthogonal projections. It is straightforward to see that sets for which the Fourier and Hausdorff dimension coincide have no exceptional projections, that is, all orthogonal projections satisfy the conclusion of Marstrand's theorem. With this in mind, one might believe that the Fourier dimension (or at least, Fourier decay) could be used to give better estimates for the Hausdorff dimension of the exceptional set in general. We obtain projection theorems and exceptional set estimates based on the Fourier spectrum; a family of dimensions that interpolates between the Fourier and Hausdorff dimensions. We apply these results to show that the Fourier spectrum can be used to improve several results for the Hausdorff dimension in certain cases, such as Ren--Wang's sharp bound for the exceptional set in the plane, Peres--Schlag's exceptional set bound and Bourgain--Oberlin's sharp 0-dimensional exceptional set estimate."
        />
      </ol>
      <DissertationDiv
        title='Undergraduate Thesis (Spanish 🇦🇷)'
        where='UNL-FIQ'
        wherelink='https://www.fiq.unl.edu.ar'
        info='Supervised by Marisa Toschi and Mauricio Ramseyer'
        linkURL='/UndergradDissertation.pdf'
        linkDesc='Homogeneous Type Spaces and Metrisation'
      />
    </div>
  );
};

export default Page;
