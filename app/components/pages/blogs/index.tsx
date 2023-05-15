import React from 'react';
import { blogsMock } from './mock';
import Blog from '../blog';
import Heading from '../../atoms/Heading';

const Blogs: React.FC = () => {
  return (
    <div>
      <Heading>Blogs</Heading>
      <div className="row mb-2">
        {blogsMock.map((blog) => {
          return (
            <Blog
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              date={blog.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
