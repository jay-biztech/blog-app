import React from 'react';
import { blogsMock } from './mock';
import Blog from '../blog';

const Blogs: React.FC = () => {
  return (
    <div>
      <h2>Blogs</h2>
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
  );
};

export default Blogs;
