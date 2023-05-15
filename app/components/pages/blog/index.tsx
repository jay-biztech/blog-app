import React from 'react';
import Panel from '../../organisms/Panel';
import { BlogProps } from './types';

const Blog: React.FC<BlogProps> = ({ title, date, description }) => {
  return <Panel {...{ title, date, description }} />;
};

export default Blog;
