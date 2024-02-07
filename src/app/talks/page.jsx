import React from 'react';
import Talk from '../components/Talk';

const Teaching = () => {
  return (
    <div>
      <h1>Talks</h1>
      <ol reversed>
        {/*  */}
        <Talk
          title='The Fourier spectrum under orthogonal projections'
          where='St. Andrews Analysis Seminar'
          link='https://sta-analysis.github.io/seminars/'
          when='Feb. 2024'
        />
      </ol>
    </div>
  );
};

export default Teaching;
