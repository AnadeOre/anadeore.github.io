'use client';
import React from 'react';
import stylesHAPDE from './stylesHAPDE.module.css';

const FoodEvent = ({time, event}) => {
  return (
    <li key={time}>
      <div>
        <span className={stylesHAPDE.timesFood}>{time}:</span>{' '}
        <span className={stylesHAPDE.speakerFood}>{event}</span>
      </div>
    </li>
  );
};

export default FoodEvent;
