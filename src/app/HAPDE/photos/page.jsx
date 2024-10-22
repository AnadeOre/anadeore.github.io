import React from 'react';
import Link from 'next/link';
// import NoteLi from '../components/NoteLi';
import HeaderEvent from '../HeaderEvent';
import Footer from '../../components/Footer';

const Page = () => {
  return (
    <div>
      <HeaderEvent />
      <h1>Photos</h1>
      <p>Here there will be some photos taken during the workshop.</p>
    </div>
  );
};

export default Page;
