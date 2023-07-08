import PropTypes from 'prop-types';
import { Feedback, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Feedback>
      {options.map(option => (
        <FeedbackBtn key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackBtn>
      ))}
    </Feedback>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;