import React from 'react';
import Link from 'next/link';

const PublicationLi = ({title, coauthors, year, arxiv, journal, doi, info}) => {
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
    <li>
      <b>{title}</b>{' '}
      {coauthors ? <>(with {renderAuthors(coauthors)}), </> : ', '}
      {year},{' '}
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
