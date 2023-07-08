import PropTypes from 'prop-types';
import { StatisticsWrap, StatisticsText } from 'components';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrap>
      <StatisticsText>Good: {good}</StatisticsText>
      <StatisticsText>Neutral: {neutral}</StatisticsText>
      <StatisticsText>Bad: {bad}</StatisticsText>
      <StatisticsText>Total: {total}</StatisticsText>
      <StatisticsText>
        Positive feedback percentage: {positivePercentage}%
      </StatisticsText>
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
