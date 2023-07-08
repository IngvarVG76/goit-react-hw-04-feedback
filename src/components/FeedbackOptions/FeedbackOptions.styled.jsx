import styled from '@emotion/styled';

export const Feedback = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(2)};
  margin-bottom: 30px;
`;
export const FeedbackBtn = styled.button`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.FontWeight.light};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing(2)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
  text-transform: capitalize;

  &:hover {
    background-color: blue;
  }
`;
