import Typography from '@material-ui/core/Typography';

import './index.scss';

const InfoItem = ({
  title,
  value,
}) => {
  return (
    <div className="info-item">
      <Typography
        variant="body1"
        className="info-item__value"
      >{value}</Typography>
      <Typography
        variant="subtitle1"
        className="info-item__title"
      >{title}</Typography>
    </div>
  );
};

export default InfoItem;
