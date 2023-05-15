import React from 'react';
import { blogsMock } from './mock';
import Blog from '../blog';

const Blogs: React.FC = () => {
  return (
    <div>
      <header className="blog-header lh-1 py-3">
        <h1>
          <center>Blogs</center>
        </h1>
      </header>
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
