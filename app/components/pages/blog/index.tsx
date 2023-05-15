import React from 'react';
import { BlogProps } from './types';

const Blog: React.FC<BlogProps> = (props) => {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h3 className="mb-0">{props.title}</h3>
          <div className="mb-1 text-body-secondary">{props.date}</div>
          <p className="card-text mb-auto">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
