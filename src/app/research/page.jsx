import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <h1>Research</h1>
      <ul>
        <li>
          <h4>Undergraduate dissertation</h4>
          <Link href='https://anadeore.github.io/files/UndergradDissertation.pdf'>
            Espacios de tipo homogéneo y metrización
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
