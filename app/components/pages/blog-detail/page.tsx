import React from 'react';
import DetailPanel from '../../organisms/DetailPanel';
import { BlogProps } from '../blog/types';

const BlogDetail: React.FC<BlogProps> = ({ title, date, description, url }) => {
  return <DetailPanel {...{ title, date, description, url }} />;
};

export default BlogDetail;
