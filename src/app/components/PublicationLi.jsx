'use client';
import React from 'react';
import {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/list.module.css';

const PublicationLi = ({
  title,
  coauthors,
  year,
  arxiv,
  journal,
  doi,
  tap,
  info,
  abstract,
}) => {
  const [viewAbstract, setViewAbstract] = useState(false);
  const renderAuthors = (coauthors) => {
    return coauthors.map((author, index) => (
      <>
        {author.website ? (
          <Link target='_blank' className='linkDecor' href={author.website}>
            {author.name}
          </Link>
        ) : (
          <span>{author.name}</span>
        )}
        {index < coauthors.length - 2
          ? ', '
          : index == coauthors.length - 1
          ? ''
          : ' and '}
      </>
    ));
  };

  return (
    <li key={arxiv}>
      {title} {coauthors ? <>(with {renderAuthors(coauthors)}), </> : ', '}
      <Link href={arxiv} target='_blank' className='linkDecor'>
        arXiv
      </Link>
      .
      <br />
      {journal ? <b>{journal}</b> : `Submitted (${year})`}{' '}
      {tap ? ` (to appear)` : ''}
      {info ? `, ${info}` : ''}{' '}
      {doi
        ? `, ${(
            <Link href={doi} target='_blank' className='linkDecor'>
              doi
            </Link>
          )}`
        : ''}
      <br />
      {abstract !== undefined ? (
        <>
          <button
            className={styles.absButtonPubli}
            onClick={() => setViewAbstract((viewAbstract) => !viewAbstract)}>
            {viewAbstract ? '-' : '+'} Abstract
          </button>
          {''}
          {viewAbstract && (
            <div className={styles.abstractPubli}>{abstract}</div>
          )}
        </>
      ) : (
        ''
      )}
    </li>
  );
};

export default PublicationLi;
