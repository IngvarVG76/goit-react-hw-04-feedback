import PropTypes from 'prop-types';
import { Heading, SectionWrap } from 'components';

const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <Heading>{title}</Heading>
      {children}
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
