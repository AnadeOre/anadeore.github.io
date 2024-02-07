import React from 'react';
import DissertationDiv from '../components/DissertationDiv';
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
      <ul>
        <DissertationDiv
          title='Undergraduate Thesis (Spanish 🇦🇷)'
          where='UNL-FIQ'
          wherelink='https://www.fiq.unl.edu.ar'
          info='Supervised by Marisa Toschi and Mauricio Ramseyer'
          linkURL='/UndergradDissertation.pdf'
          linkDesc='Homogeneous Type Spaces and Metrisation'
        />
      </ul>
    </div>
  );
};

export default Page;
