import React from 'react';
import { DescriptionProps } from './types';

const Description: React.FC<DescriptionProps> = ({ text, limit }) => {
  return (
    <p className="card-text mb-auto">
      {limit === undefined ? text : `${text.substring(0, limit)}...`}
    </p>
  );
};

export default Description;
