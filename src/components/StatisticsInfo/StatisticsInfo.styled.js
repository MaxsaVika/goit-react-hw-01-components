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
  width: ${p => p.theme.sizes.statItemMin};
  padding: ${p => p.theme.space[4]};
  border-top: ${p => p.theme.borders.cardInner};
  background-color: ${p => p.backgroundColor};
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.cardInner};
  }
`;

export const StatisticsTitle = styled.span`
  margin-bottom: ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.whiteText};
  text-shadow: ${p => p.theme.shadows.text};
`;

export const StatisticsValue = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.whiteText};
  text-shadow: ${p => p.theme.shadows.text};
`;
