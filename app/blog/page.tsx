import React from 'react';
import { BlogProps } from './types';
import Panel from '../components/organisms/Panel';

const Blog: React.FC<BlogProps> = ({ title, date, description }) => {
  return <Panel {...{ title, date, description }} />;
};

export default Blog;
