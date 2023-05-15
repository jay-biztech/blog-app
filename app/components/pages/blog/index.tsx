import React from 'react';
import { BlogProps } from './types';

const Blog: React.FC<BlogProps> = (props) => {
  return (
    <div>
      <h4>{props.id}</h4>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default Blog;
