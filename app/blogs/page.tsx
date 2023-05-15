import React from 'react';
import { blogsMock } from './mock';
import Heading from '../components/atoms/Heading';
import Blog from '../components/pages/blog/page';

const Blogs: React.FC = () => {
  return (
    <div>
      <Heading>Blogs</Heading>
      <div className="row mb-2">
        {blogsMock.map(({ id, title, description, date }) => {
          return (
            <Blog
              key={id}
              url={`/blogs/${id}`}
              {...{ id, title, description, date }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
