import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: ${p => p.theme.sizes.table};
  border-collapse: collapse;
  border-radius: ${p => p.theme.radii.card};
  box-shadow: ${p => p.theme.shadows.generic};
  overflow: hidden;
`;

export const TransactionTableHead = styled.th`
  width: calc(100% / 3);
  padding: ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: uppercase;
  color: ${p => p.theme.colors.whiteText};
  border: ${p => p.theme.borders.cardInner};
`;

export const TransactionTableData = styled.td`
  width: calc(100% / 3);
  padding: ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  text-transform: capitalize;
  color: ${p => p.theme.colors.lightText};
  border: ${p => p.theme.borders.cardInner};
`;
