'use client';
import React from 'react';
import stylesHAPDE from './stylesHAPDE.module.css';

const FoodEvent = ({time, event}) => {
  return (
    <li key={time}>
      <div>
        <span className={stylesHAPDE.times}>{time}:</span>{' '}
        <span className={stylesHAPDE.speaker}>{event}</span>
      </div>
    </li>
  );
};

export default FoodEvent;
