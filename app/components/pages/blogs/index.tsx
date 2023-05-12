import React from 'react';
import { blogsMock } from './mock';

const Blog: React.FC = () => {
  return (
    <div>
      <h2>Blogs</h2>
      {blogsMock.map((blog) => {
        return (
          <>
            <h4>{blog.id}</h4>
            <h4>{blog.title}</h4>
            <p>{blog.description}</p>
            <p>{blog.date}</p>
          </>
        );
      })}
    </div>
  );
};

export default Blog;
