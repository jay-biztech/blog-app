import React from 'react';
import { DescriptionProps } from './types';

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <p className="card-text mb-auto">{children}</p>;
};

export default Description;
