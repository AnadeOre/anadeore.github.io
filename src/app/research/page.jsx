import React from 'react';
import Link from 'next/link';
import DissertationDiv from '../components/DissertationDiv';
import PublicationLi from '../components/PublicationLi';
const Page = () => {
  return (
    <div>
      <h1>Research</h1>
      <p>
        While the Hausdorff dimension of a set gives information regarding its
        geometric scaling properties, the Fourier dimension quentifies how
        structured vs how random that set is. For example Cantor set (very
        algebraically structured) has Fourier dimension zero, but random sets
        are usually Salem sets, i.e. their Fourier dimension is as large as it
        can be, being equal to their Hausdorff dimension.
        <br />
        In these situations, where we have two dimensions that capture different
        types of information, dimension interpolation is useful to gain insight
        on their relation. I'm currently studying the Fourier spectrum, a family
        of dimensions that live between the Fourier and the Hausdorff dimensions
        for sets and Fourier and Sobolev dimensions for measures.
        {/* Unerstanding how these dimensions */}
        {/* behave gives more insight into the relation between the dimensions it */}
        {/* interpolates. */}
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
      </div>
      <h3>Publications</h3>
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
          arxiv='https://arxiv.org/abs/2403.12603v1'
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
