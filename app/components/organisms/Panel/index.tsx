import Link from 'next/link';
import DateFormatter from '../../atoms/DateFormatter';
import Description from '../../atoms/Description';
import Title from '../../atoms/Title';
import { PanelProps } from './types';

const Panel: React.FC<PanelProps> = ({ title, date, description, url }) => {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <Link href={url}>
            <Title>{title}</Title>
          </Link>
          <DateFormatter>{date}</DateFormatter>
          <Description text={description} limit={200} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
