import React from 'react';
import Link from 'next/link';
import NoteLi from '../components/NoteLi';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div>
      <h1>Notes</h1>
      <p>
        Here you can find some expository articles that I wrote. These may
        contain errors and sometimes are mathematically imprecise. Plese refer
        to the references on each note for the correct statements.
      </p>
      <ul>
        <NoteLi
          desc='My reading group presentation at the University of St Andrews. Autumn 2024-2025.'
          title='Decoupling for the parabola and the Kakeya conjecture'
          pdf='/Notes/Decoupling.pdf'
        />
        <NoteLi
          title='Brownian motion and stochastic processes'
          pdf='/Notes/BrownianStochastic.pdf'
        />
        <NoteLi
          desc='Reading group at the University of St Andrews in which several members of the group participated. Any errors in the notes are due to myself. Autumn 2023-2024.'
          title='Additive combinatorics'
          pdf='/Notes/AdditiveCombinatorics.pdf'
        />
      </ul>
    </div>
  );
};

export default Page;
