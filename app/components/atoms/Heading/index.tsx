import React from 'react';
import { HeadingProps } from './types';

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <header className="blog-header lh-1 py-3">
      <h1>
        <center>{children}</center>
      </h1>
    </header>
  );
};

export default Heading;
