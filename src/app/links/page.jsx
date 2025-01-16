import React from 'react';
import Link from 'next/link';
import NoteLi from '../components/NoteLi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import linksStyle from '../styles/links.module.css';

const Page = () => {
  return (
    <div>
      {' '}
      <Header />
      <div className={linksStyle.columns}>
        <div className={linksStyle.col1}>
          <h3 className={linksStyle.title}>Notes</h3>
          <p>
            These are some notes that I've written for myself. They may contain
            errors and be mathematically imprecise. Plese refer to the
            references on each note for precise statements.
          </p>
          <ul className={linksStyle.ul}>
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
              desc='Reading group at the University of St Andrews in which several members of the group would take turns to talk about additive combinatorics. Any errors in the notes are due to myself. Autumn 2023-2024.'
              title='Additive combinatorics'
              pdf='/Notes/AdditiveCombinatorics.pdf'
            />
          </ul>
        </div>
        <div className={linksStyle.col2}>
          <h3 className={linksStyle.title}>Events I've organised</h3>
          <ul className={linksStyle.ul}>
            <li>
              <Link href='https://anadeore.github.io/HAPDE' target='_blank'>
                HAPDE meeting in St Andrews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
