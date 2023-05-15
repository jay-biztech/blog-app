import React from 'react';
import { BlogProps } from './types';
import Title from '../../atoms/Title';
import Description from '../../atoms/Description';
import Date from '../../atoms/Date';

const Blog: React.FC<BlogProps> = ({ title, date, description }) => {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Description>{description}</Description>
        </div>
      </div>
    </div>
  );
};

export default Blog;
