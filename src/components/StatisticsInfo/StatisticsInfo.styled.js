import styled from 'styled-components';

// export const StatisticsList = styled.ul`
//   list-style: none;
//   display: flex;
//   padding: ${p => p.theme.space[0]};
//   background-color: ${p => p.theme.colors.lightBG};
// `;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: ${p => p.theme.space[4]};
  border-top: ${p => p.theme.borders.cardInner};
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.cardInner};
  }
`;

export const StatisticsTitle = styled.span`
  margin-bottom: ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.darkText};
`;

export const StatisticsValue = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.darkText};
`;
