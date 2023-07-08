import PropTypes from 'prop-types';
import { NotificatiomMsg } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificatiomMsg>{message}</NotificatiomMsg>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
