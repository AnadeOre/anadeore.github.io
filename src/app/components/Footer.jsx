import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <small>
        Copyright &copy; <span id='copyright'></span>{' '}
        <Link target='_blank' href='https://github.com/AnadeOre'>
          AnadeOre
        </Link>{' '}
        | All rights reserved{' '}
      </small>
    </footer>
  );
}
