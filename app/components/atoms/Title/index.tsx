import React from 'react';
import { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h3 className="mb-0">{children}</h3>;
};

export default Title;
