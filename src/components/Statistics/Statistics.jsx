import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledSectionStats,
  StyledStatsList,
  StyledTitle,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StyledSectionStats>
      {title && <StyledTitle>{title}</StyledTitle>}

      <StyledStatsList>
        {stats.map(({ id, label, percentage }) => (
          <StyledItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StyledItem>
        ))}
      </StyledStatsList>
    </StyledSectionStats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
