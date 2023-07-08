import styled from '@emotion/styled';

export const StatisticsWrap = styled.div`
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  background: ${props => props.theme.colors.tagBackground};
`;

export const StatisticsText = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.FontWeight.light};
`;
