import React from 'react';
import Header from '../components/Header';
import CascadeExplorer from './CascadeExplorer';

export const metadata = {
  title: 'Mandelbrot cascades – Ana Emilia de Orellana',
  description:
    'Generate random Mandelbrot cascade measures on the unit square and see how they change with the distribution of the weights.',
};

const Page = () => {
  return (
    <div>
      <Header />
      <h1>Mandelbrot cascades</h1>
      <CascadeExplorer />
    </div>
  );
};

export default Page;
