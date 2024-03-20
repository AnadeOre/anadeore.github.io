import React from 'react';
import Link from 'next/link';
import styles from '../styles/list.module.css';
import {render} from 'react-dom';

const PublicationLi = ({title, coauthors, year, arxiv, journal, doi, info}) => {
  const renderAuthors = (coauthors) => {
    return coauthors.map((author) => (
      <span>
        {author.website ? (
          <Link href={author.website}>{author.name}</Link>
        ) : (
          <span>{author.name}</span>
        )}
      </span>
    ));
  };
  return (
    <li>
      <b>{title}</b> (with {renderAuthors(coauthors)}
      ), {year},{' '}
      <Link href={arxiv} target='_blank' className='linkDecor'>
        arXiv
      </Link>
      .
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
