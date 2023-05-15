import React from 'react';
import { DateProps } from './types';

const Date: React.FC<DateProps> = ({ children }) => {
  return <div className="mb-1 text-body-secondary">{children}</div>;
};

export default Date;
