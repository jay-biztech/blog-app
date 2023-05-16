import Link from 'next/link';
import DateFormatter from '../../atoms/DateFormatter';
import Description from '../../atoms/Description';
import Title from '../../atoms/Title';
import { DetailPanelProps } from './types';

const DetailPanel: React.FC<DetailPanelProps> = ({
  title,
  date,
  description,
}) => {
  return (
    <div className="col-md-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <Title>{title}</Title>
          <DateFormatter>{date}</DateFormatter>
          <Description text={description} />
        </div>
      </div>
    </div>
  );
};

export default DetailPanel;
