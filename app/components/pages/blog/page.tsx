import React from 'react';
import { BlogProps } from './types';
import Panel from '../../organisms/Panel';

const Blog: React.FC<BlogProps> = ({ title, date, description, url }) => {
  return <Panel {...{ title, date, description, url }} />;
};

export default Blog;
