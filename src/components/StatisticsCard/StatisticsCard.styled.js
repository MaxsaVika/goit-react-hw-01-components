import styled from 'styled-components';

export const StatsCard = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: ${p => p.theme.radii.card};
  background-color: ${p => p.theme.colors.lightBG};
  box-shadow: ${p => p.theme.shadows.generic};
  overflow: hidden;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  padding: ${p => p.theme.space[0]};
  background-color: ${p => p.theme.colors.lightBG};
`;

// width: ${p => p.theme.sizes.profileWidth};
