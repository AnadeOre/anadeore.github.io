import React from 'react';
import Link from 'next/link';
import styles from '../styles/list.module.css';

const PublicationLi = ({title, coauthors, journal, info, arxiv, doi}) => {
  let stringvariable = '';
  coauthors.forEach((author) => {
    stringvariable = author.name + ', ' + stringvariable;
  });
  return (
    <li>
      <b>{title}</b> (with {stringvariable}
      ),{' '}
      <Link href={arxiv} target='_blank' className='linkDecor'>
        arXiv
      </Link>
      <br />
      {journal ? <b>{journal}</b> : 'Submitted.'}
      {info ? `, ${info}` : ''}{' '}
      {doi
        ? `, ${(
            <Link href={doi} target='_blank' className='linkDecor'>
              doi
            </Link>
          )}`
        : ''}
    </li>
  );
};

export default PublicationLi;
