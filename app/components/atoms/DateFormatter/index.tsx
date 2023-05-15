import React from 'react';
import { DateProps } from './types';
import { format } from 'date-fns';

const DateFormatter: React.FC<DateProps> = ({ children }) => {
  return (
    <div className="mb-1 text-body-secondary">
      {format(new Date(children), 'Pp')}
    </div>
  );
};

export default DateFormatter;
